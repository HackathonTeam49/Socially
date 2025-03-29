import React from "react";
import { useEffect, useState } from "react";

import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./LoginPage.css";
import "./ForgotPassword.css";

import { Link } from "react-router-dom";
import LoaderFullPage from "../components/LoaderFullPage";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  //Guys PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderFullPage />;
  }

  return (
    <div className="main-login-page fg-page">
      <div className="login-container fg-cont">
        <div className="login-left">
          <MainBg />
        </div>

        <div className="login-right fg">
          <h1>Forgot your Password</h1>
          <p className="fg-ct">
            A pin will be sent to your email to help you recover it
          </p>

          <form className="login-form">
            <div className="login-form-group fg-form">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="useraddress@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <Button type="regular" className="login-signup-button">
              Reset Password
            </Button>
          </form>
          <p className="signup-link">
            Remember your password? <Link to="/login">Back to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
