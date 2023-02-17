import React from 'react';
import logo from '../logo.png';
import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Your quest with Knowledge Knack starts here!</h1>
      <div className="HomePage-buttons">
        <Link to="/join">
          <button className="HomePage-button HomePage-button-orange" type="button">Join</button>
        </Link>
        <Link to="/create-quiz">
          <button className="HomePage-button HomePage-button-green" type="button">Make</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;