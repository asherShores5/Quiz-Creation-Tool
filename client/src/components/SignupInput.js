import React, { Component } from "react";
import axios from "axios";
//const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const Instructor = require('../models/instructor');

class Input extends Component {
  state = {
    email: "",
    password: "",
  };

  signUp = () => {
    const { email, password } = this.state;

    if (email && password) {
        
    } else {
      console.log("Email and password required");
    }
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

    verifyIfUserExists = (e) => {
    const { email, password } = this.state;

    try {
      const user = Instructor.findOne({ email });
      if (user) {
        // User found
        return null;
      }
  
    } catch (err) {
      console.error(err);
      return false;
    }
  
    // Check if the email ends with "@uni-due.de"
    const validEmail = email.endsWith("@uni-due.de");
  
    //Check if the password has at least eight characters.
    const validPassword = password.length >= 8;
  
    // Return boolean indicating if both email and password are valid
    return validEmail && validPassword;
  }
  

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <label>
          Email:<br/>
          <input type="email" onChange={this.handleEmailChange} value={email} />
        </label>
        <br />
        <label>
          Password:<br/>
          <input type="password" onChange={this.handlePasswordChange} value={password} />
        </label>
        <br />
        <button className="nav-button" onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}

export default Input;
