import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/join">
          <button className="nav-button">Join</button>
        </Link>
        <Link to="/questioncreator">
          <button className="nav-button">Make</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;