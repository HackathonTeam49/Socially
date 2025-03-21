import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Bg from '../components/MainBg'; // i Imported the reusable MainBg component
import './Welcome.css'; // i Imported the CSS for this component



const Welcome = () => {

  const navigate = useNavigate();
  const handleRegularClick = ()=>{
    navigate('/register');
  };
  const handleVolunteerClick = ()=>{
    navigate('/volunteer');
  };



  return (
    <div className="welcome-container">
      {/* ths is the Left Part: Reusable Bg Component */}
      <div className="welcome-left">
        <Bg />
      </div>

      {/* this is the Right Part: Welcome Text and Buttons */}
      <div className="welcome-right">
        <h1>Welcome to Socially</h1>
        <p>Please select the type of account you would like to create</p>
        <Button type="regular" onClick={handleRegularClick}>
          Regular Account
        </Button>

        <Button type="volunteer" onClick={handleVolunteerClick}>
         Volunteer Account
        </Button>
    
      </div>
    </div>
  );
};

export default Welcome;