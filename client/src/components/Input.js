import React, { Component } from "react";
import axios from "axios";
//const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

class Input extends Component {
  state = {
    email: "",
    password: "",
  };

  signIn = () => {
    const { email, password } = this.state;

    if (email && password) {
      axios
        .post("/instructors", { email, password })
        .then((res) => {
          const { token } = res.data;

          if (token) {
            localStorage.setItem("token", token);
            this.props.history.push("join/login/success"); // Redirect to dashboard
          } else {
            console.log("Invalid email or password");
          }
        })
        .catch((err) => console.log(err));
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

  verifyCredentials = (e) => {
    const { email, password } = this.state;

    try {
      // Find the user in the database by email
      axios.get({email});

      const user = Instructor.findOne({ email });
      if (!user) {
        // User not found
        return null;
      }
  
      // Verify the password
      //const passwordMatch = bcrypt.compare(password, user.password);
      if (password === user.password) {
        return user;
      } else {
        // Password doesn't match
        return null;
      }
  
      // Credentials are valid
      return true;
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
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

export default Input;
