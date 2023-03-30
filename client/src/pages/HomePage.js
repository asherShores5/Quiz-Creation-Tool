import React from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import './HomePage.css';
import "../App.css";
import "../index.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Education - Everyone - Everywhere, That's Evanest!</h1>
      <div className="HomePage-buttons">
        <Link to="/HP1-page">
          <button className="HomePage-button HomePage-button-orange" type="button">Start</button>
        </Link>
        <Link to="/create-quiz">
          <button className="HomePage-button HomePage-button-green" type="button">Create Quiz</button>
        </Link>
        <Link to="/sign-in">
          <button className="HomePage-button HomePage-button-green" type="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;