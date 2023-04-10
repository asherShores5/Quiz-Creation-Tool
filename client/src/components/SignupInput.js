import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const Instructor = require('../models/instructor');

class Input extends Component {
  state = {
    email: "",
    password: "",
    retypePassword: "",
    realname: "",
    identity: "teacher",
  };

  signUp = (e) => {
    e.preventDefault();

    const { email, password, retypePassword } = this.state;

    if (!email || !password ) {
      console.log("Email and password required");
    }

    else if ( !retypePassword ) {
        console.log("Retyped password required");
    }
    else if ( password !== retypePassword ) {
        console.log('Passwords do not match.');
    } else {
        localStorage.setItem('isAuthorized', true);
        // redirect to home page
        this.props.navigate('/TeacherPage');
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

  handleRetypedPasswordChange = (e) => {
    this.setState({
        retypePassword: e.target.value,
    })
  }

  handleRealNameChange = (e) => {
    this.setState({
      realname: e.target.value,
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
  };

  handleToggle = (e) => {
    this.setState({
        identity: e.target.value,
    });
  };
  

  render() {
    const { email, password, retypePassword, realname,identity } = this.state;

    return (
      <div>
        <label>
          Real Name:<br/>
            <input type="Real Name" onChange={this.handleRealNameChange} value={realname} />
          </label>
          <br />
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
        <label>
          Retype Password:<br/>
          <input type="password" onChange={this.handleRetypedPasswordChange} value={retypePassword} />
        </label>
        <br />
        <label>
            <input
            type="radio"
            name="options"
            value="teacher"
            checked={identity === 'teacher'}
            onChange={this.handleToggle}
            />
            Teacher
        </label>
        <label>
            <input
            type="radio"
            name="options"
            value="student"
            checked={identity === 'student'}
            onChange={this.handleToggle}
            />
            Student
        </label>
        <br />
        <button className="nav-button" onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Input {...props} navigate={navigate} />
}

export default WithNavigate;
