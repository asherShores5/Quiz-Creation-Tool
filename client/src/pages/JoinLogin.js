import React, { useState } from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import './JoinPage.css';
import "../App.css";
import "../index.css";
import { Form, Input, Button } from 'semantic-ui-react';
import mongoose from 'mongoose';

function getRandomPage() {
    // generate a random number between 1 and 2
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    // Construct the URL for the random page
    if (randomNumber === 1) {
        return '/join/login/success';
    } else {
        return '/join/login/failure';
    }
}

function JoinLogin() {
  const [quizID, setQuizID] = useState('');

  const handleSubmit = () => {
    // MongoDB query using quizID
    mongoose.model('Quiz').findOne({ quizID }, (err, quiz) => {
      if(err) {
        console.log(err);
      } else {
        console.log(quiz);
      }
    });
  };

  return (
    <div className="JoinPage">
      <audio src="jazzy-kadont.mp3" autoPlay loop/>
      <div className="JoinPage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Found the quiz!</h1>
      <div className="form-field">
        <Form onSubmit={handleSubmit}>
          <Form.Field
            control={Input}
            label='Enter a name.'
            placeholder='e.g. Andrew Esch'
            value={quizID}
            onChange={e => setQuizID(e.target.value)}
          />
          <Link to="/survey-quiz">
            <Form.Field control={Button} disabled={!quizID} color='grey'>Login</Form.Field>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default JoinLogin;