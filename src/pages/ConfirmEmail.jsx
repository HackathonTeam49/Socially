import React, { useState } from "react";
import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./ConfirmEmail.css";

const ConfirmEmail = (index, e) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const handleCodeChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;

      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      } else {
        e.target.value = "";
        e.preventDefault(); // Prevent the default behavior
      }
    }
  };

  return (
    <div className="confirm-email-container">
      {/* Left Part: Reusable MainBg Component */}
      <div className="confirm-email-left">
        <MainBg />
      </div>

      {/* Right Part: Email Confirmation Form */}
      <div className="confirm-email-right">
        <h1>Confirm Your Email</h1>
        <p>Please input the six digit code that was sent to your email</p>
        <div className="code-inputs">
          {[...Array(6)].map((digit, index) => (
            <input
              value={digit}
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              className="code-input"
              placeholder=""
              onChange={(e) => handleCodeChange(index, e.target.value)}
            />
          ))}
        </div>
        <Button type="regular" className="sign-up-button">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
