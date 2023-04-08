import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import "../index.css";
import Input from "../components/Input";

function LogInAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post("/instructors", { email, password })
      .then((res) => {
        const { token } = res.data;
  
        if (token) {
          localStorage.setItem("token", token);
          // Redirect to dashboard
        } else {
          console.log("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("An error occurred while Logging in");
      });
  };
  

  return (
    <div className="center">
      <Input />
    </div>
  );
}

export default LogInAccount;
