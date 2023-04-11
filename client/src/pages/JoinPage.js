import React, { useState } from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import './JoinPage.css';
import "../App.css";
import "../index.css";
import "./JoinPage.css";
import { Form, Input, Button } from 'semantic-ui-react';
import mongoose from 'mongoose';

function JoinPage() {
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
      <h1>Let's a find a quiz!</h1>
      <div className="form-field">
        <Form onSubmit={handleSubmit}>
          <Form.Field
            control={Input}
            label='Quiz ID'
            placeholder='Ex. #000000'
            value={quizID}
            onChange={e => setQuizID(e.target.value)}
          />
          <Link to="/join/search">
            <Form.Field control={Button} disabled={!quizID} color='grey'>Search</Form.Field>
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default JoinPage;