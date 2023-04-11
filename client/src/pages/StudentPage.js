import React from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import './HomePage.css';
import "../App.css";
import "../index.css";

function StudentPage() {
  return (
    <div className="HomePage">
      <div className="HomePage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Student Page</h1>
      <div className="StudentPage-buttons">
        <Link to="/join">
          <button className="StudentPage-button: Make Quiz" type="button">Join Quiz</button>
        </Link>
        <Link to="/create-quiz">
          <button className="StudentPage-button: Start Quiz" type="button">Make Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentPage;