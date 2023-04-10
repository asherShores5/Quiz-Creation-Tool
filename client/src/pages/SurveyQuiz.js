import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyQuiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
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

  function handleAnswerSelect(questionId, answerIndex) {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerIndex,
    }));
  }

  async function handleSubmit() {
    try {
      const response = await axios.post('/api/quiz-analytics', {
        answers: selectedAnswers,
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

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <h2>Question #{currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].prompt}</p>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question_${questions[currentQuestion]._id}`}
                  id={`question_${questions[currentQuestion]._id}_answer_${index}`}
                  checked={selectedAnswers[questions[currentQuestion]._id] === index}
                  onChange={() => handleAnswerSelect(questions[currentQuestion]._id, index)}
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
      {submitted && <p>Answers submitted successfully!</p>}
    </div>
  );
}

export default SurveyQuiz;
