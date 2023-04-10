import React from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import './HomePage.css';
import "../App.css";
import "../index.css";

function TeacherPage() {
  return (
    <div className="TeacherPage">
      <div className="TeacherPage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Professor Page</h1>
      <div className="TeacherPage-buttons">
        <Link to="/create-quiz">
          <button className="button 1: Make Quiz" type="button">Make Quiz</button>
        </Link>
        <Link to="/*">
          <button className="TeacherPage-button: Start Quiz" type="button">Start Quiz</button>
        </Link>
        <Link to="/*">
          <button className="TeacherPage-button: Analyze Quiz" type="button">Analyze Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default TeacherPage;