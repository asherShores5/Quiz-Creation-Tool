import React from 'react';
import { Link } from "react-router-dom";
import CatImage from '../components/CatImage';
// import './HomePage.css';
import "../App.css";
import "../index.css";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-logo">
        <CatImage/>
      </div>
      <h1>Sorry, this page doesn't exist.</h1>
      <div className="HomePage-buttons">
        <Link to="/">
          <button className="HomePage-button HomePage-button-orange" type="button">Back to homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;