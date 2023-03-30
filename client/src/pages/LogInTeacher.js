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
        <Link to="/join">
          <button className="HomePage-button HomePage-button-orange" type="button">make quiz</button>
        </Link>
        <Link to="/create-quiz">
          <button className="HomePage-button HomePage-button-green" type="button">start quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;