import React from 'react';
import Bg from '../components/MainBg';
import Button from '../components/Button';
import './Welcome.css';

const Volunteer = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <Bg />
      </div>
      <div className="welcome-right">
        <h1>Register as a Volunteer</h1>
        <p>Fill out the form below to create a volunteer account.</p>
        <Button type="volunteer">Sign Up</Button>
      </div>
    </div>
  );
};

export default Volunteer;