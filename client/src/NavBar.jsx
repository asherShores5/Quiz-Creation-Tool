import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/logo.png";

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/join">
          <button className="nav-button">Log In</button>
        </Link>
        <Link to="/join/login">
          <button className="nav-button">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;