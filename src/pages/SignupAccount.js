import React, { useState } from "react";
import "../App.css";
import "../index.css";
import SignupInput from "../components/SignupInput";
import { useNavigate  } from "react-router-dom";

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
  
  const history = useNavigate();

  return (
    <div className="center">
      <SignupInput history = {history}/>
    </div>
  );
}

export default SignupAccount;
