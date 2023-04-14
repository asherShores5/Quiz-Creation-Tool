import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyQuiz() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedAnswersIndex, setSelectedAnswersIndex] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [infoEntered, setInfoEntered] = useState(false);
  const [audioSource, setAudioSource] = useState('../audio/jazzy-kadont.mp3');

  useEffect(() => {
    const audio = document.getElementById('music');

    // add event listener for 'loadeddata' event
    audio.addEventListener('loadeddata', () => {
      audio.play();
    });

    // fetch questions from the API
    async function fetchQuestions() {
      try {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuestions();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleInfoSubmit() {
    if (name.trim() !== '' && email.trim() !== '') {
      setInfoEntered(true);
      setAudioSource('../audio/E_1.mp3');
    } else {
      alert('Please enter your name and email.');
    }
  }

  function handleAnswerSelect(questionId, answerIndex) {
    const answer = questions[currentQuestion].answers[answerIndex];
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        questionId,
        answer,
      },
    }));
    setSelectedAnswersIndex((prevAnswersIndex) => ({
      ...prevAnswersIndex,
      [questionId]: answerIndex,
    }));
  }

  async function handleSubmit() {
    const resultAnswers = Object.values(selectedAnswers);
    try {
      await axios.post('/api/results', {
        studentName: name,
        studentEmail: email,
        answers: resultAnswers,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }

  function handleNextQuestion() {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  }

  function handlePreviousQuestion() {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  }

  function handleLiClick(questionId, answerIndex) {
    const radioButton = document.getElementById(`question_${questionId}_answer_${answerIndex}`);
    radioButton.click();
  }

  return (
    <div className="JoinPage">
      <audio id="music" src={audioSource} loop={true} autoPlay volume={0.2} />
      {!infoEntered && (
        <div>
          <h2>Welcome to Evanest!</h2>
          <p>Please enter in your real name and email before starting the quiz.</p>
          <br/>
          <label>
            Real Name:
            <input type="text" value={name} onChange={handleNameChange} required />
          </label>
          <br/>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <button onClick={handleInfoSubmit}>Start the quiz</button>
        </div>
      )}
      {infoEntered && !submitted && (
        <div>
          {questions.length > 0 ? (
            <div>
              <h2>Question #{currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].prompt}</p>
              <ul className='answer-list'>
              {questions[currentQuestion].answers.map((answer, index) => (
                <li key={index} className={selectedAnswersIndex[questions[currentQuestion]._id] === index ? "selected" : ""} onClick={() => handleLiClick(questions[currentQuestion]._id, index)}>
                  <input
                    type="radio"
                    className="question-option"
                    name={`question_${questions[currentQuestion]._id}`}
                    id={`question_${questions[currentQuestion]._id}_answer_${index}`}
                    checked={selectedAnswers[questions[currentQuestion]._id] === index}
                    onClick={() => handleAnswerSelect(questions[currentQuestion]._id, index)}
                  />
                  <label htmlFor={`question_${questions[currentQuestion]._id}_answer_${index}`}>{answer}</label>
                </li>
              ))}
              </ul>
              {currentQuestion === 0 ? (
                <button onClick={handleNextQuestion}>Next Question</button>
              ) : (
                <div>
                  <button onClick={handlePreviousQuestion}>Previous Question</button>
                  {currentQuestion === questions.length - 1 ? (
                    <button onClick={handleSubmit}>Submit Answers</button>
                  ) : (
                    <button onClick={handleNextQuestion}>Next Question</button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
      {submitted && (
        <div>
          <h2>Answers submitted successfully!</h2>
          <p>Thank you for using Evanest!</p>
        </div>
      )}
    </div>
  );
}

export default SurveyQuiz;