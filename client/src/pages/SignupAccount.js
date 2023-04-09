import React, { useState } from "react";
import "../App.css";
import "../index.css";
import SignupInput from "../components/SignupInput";

function SignupAccount() {
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
  };
  

  return (
    <div className="center">
      <SignupInput />
    </div>
  );
}

export default SignupAccount;
