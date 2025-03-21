import React from 'react';
import Bg from '../components/MainBg';
import Button from '../components/Button';
import './Welcome.css';

const Register = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <Bg />
      </div>
      <div className="welcome-right">
        <h1>Register for a Regular Account</h1>
        <p>Fill out the form below to create a regular account.</p>
        <Button type="regular">Sign Up</Button>
      </div>
    </div>
  );
};

export default Register;