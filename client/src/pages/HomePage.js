import React from 'react';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import './HomePage.css';
import "../App.css";
import "../index.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>Education - Everyone - Everywhere, That's Evanest!</h1>
      
    </div>
  );
}

export default HomePage;