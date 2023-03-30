import React, { useState } from 'react';
// import './QuestionCreator.css';
import "../App.css";
import "../index.css";

const QuestionCreator = () => {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState('Multiple Choice');
  const [timeLimit, setTimeLimit] = useState('15 seconds');
  const [answers, setAnswers] = useState([]);
  
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  }

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  }

  return (
    <div className="question-creator">
      <div className="question-creator-header">
        <h1>Question Creator</h1>
      </div>
      <div className="question-creator-body">
        <div className="question-creator-prompt">
          <label htmlFor="prompt">Prompt</label>
          <br />
          <textarea 
            id="prompt"
            name="prompt"
            rows="5"
            cols="50"
            value={prompt}
            onChange={handlePromptChange}
          />
        </div>
        <div className="question-creator-type">
          <label htmlFor="type">Question Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Matching">Matching</option>
            <option value="Fill-in-the-blank">Fill-in-the-blank</option>
          </select>
        </div>
        <div className="question-creator-time-limit">
          <label htmlFor="time-limit">Time Limit</label>
          <select
            name="time-limit"
            id="time-limit"
            value={timeLimit}
            onChange={handleTimeLimitChange}
          >
            <option value="15 seconds">15 Seconds</option>
            <option value="30 seconds">30 Seconds</option>
            <option value="45 seconds">45 Seconds</option>
            <option value="60 seconds">60 Seconds</option>
          </select>
        </div>
        <div className="question-creator-answers">
          {answers.map((answer, index) => {
            return (
              <div key={index}>
                <label htmlFor={`answer-${index}`}>Answer {index + 1}</label>
                <input
                  type="text"
                  id={`answer-${index}`}
                  name={`answer-${index}`}
                  value={answer}
                  onChange={(event) => handleAnswerChange(event, index)}
                />
                <button 
                  className="question-creator-remove-button"
                  onClick={() => {
                    const newAnswers = [...answers];
                    newAnswers.splice(index, 1);
                    setAnswers(newAnswers);
                  }}
                >Remove Answer</button>
              </div>
            );
          })}
          <button onClick={handleAddAnswer}>Add Answer</button>
        </div>
      </div>
      <div className="question-creator-footer">
        <button className="question-creator-save-button">Save</button>
      </div>
    </div>
  );  
};

export default QuestionCreator;