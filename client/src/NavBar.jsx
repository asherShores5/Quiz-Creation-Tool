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
          <button className="nav-button">abcdefg</button>
        </Link>
        <Link to="/create-quiz">
          <button className="nav-button">efghitj</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;