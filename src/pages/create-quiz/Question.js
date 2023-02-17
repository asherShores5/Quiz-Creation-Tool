import React from 'react';
import { Link } from "react-router-dom";

import "./Question.css";

function Question(props) {
  const handleEditQuestion = (index) => {
    // Lookup MongoDB Question ID and link to a new subpage with the question
    // For now, setup as a link to the question-creator page
  };

  const handleDeleteQuestion = () => {
    // Send MongoDB query to remove question and reload the page
  };

  return (
    <div className="question-container">
      <div className="image-box">
        <img src={props.imageUrl} alt={props.title}  />
      </div>
      <div className="question-details">
        <h2>{props.title}</h2>
        <div className="buttons">
          <Link to="/create-quiz/question-creator">
            <button className="edit-button" onClick={() => handleEditQuestion()}>Edit Question</button>
          </Link>
          <button className="delete-button" onClick={() => handleDeleteQuestion()}>Delete Question</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
