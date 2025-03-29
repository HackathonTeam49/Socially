import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./LoginPage.css";
import googleIcon from "../assets/google-icon.png";
import appleIcon from "../assets/apple-icon.png";
import { Link } from "react-router-dom";
import LoaderFullPage from "../components/LoaderFullPage";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  //Guys PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  const passwordInput = useRef(null);
  const visibilityIcon = useRef(null);

  const handleVisibilityIconClick = () => {
    console.log("visiblity clicked");
    if (passwordInput.current && visibilityIcon.current) {
      if (passwordInput.current.type === "password") {
        passwordInput.current.type = "text";
        visibilityIcon.current.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        passwordInput.current.type = "password";
        visibilityIcon.current.classList.replace("fa-eye", "fa-eye-slash");
      }
    }
  };

  if (isLoading) {
    return <LoaderFullPage />;
  }

  return (
    <div className="main-login-page">
      <div className="login-container">
        <div className="login-left">
          <MainBg />
        </div>

        <div className="login-right">
          <h1>Log into Your Account</h1>
          <p>Fill in your details to access your account</p>
          <div className="login-social-buttons">
            <button className="login-social-btn login-google-btn">
              <img src={googleIcon} alt="Google Icon" />
              Continue with Google
            </button>
            <button className="login-social-btn login-apple-btn">
              <img src={appleIcon} alt="Apple Icon" />
              Continue with Apple
            </button>
          </div>
          <div className="login-divider">
            <span>Or</span>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
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
            <div className="login-form-group login-password-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  ref={passwordInput}
                  type="password"
                  id="password"
                  placeholder="••••••••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <i
                  ref={visibilityIcon}
                  className="fas fa-eye-slash login-icon"
                  aria-hidden="true"
                  onClick={handleVisibilityIconClick}
                ></i>
              </div>
            </div>
            <div className="login-remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button type="regular" className="login-signup-button">
              Login
            </Button>
          </form>
          <p className="signup-link">
            Don’t have an account? <Link to="/create-account">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
