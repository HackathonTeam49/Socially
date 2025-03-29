import React, { useRef } from "react";
import { useEffect, useState } from "react";

import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./LoginPage.css";
import "./ForgotPassword.css";
import "./ResetPassword.css";

import { Link } from "react-router-dom";
import LoaderFullPage from "../components/LoaderFullPage";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("qwerty for testing the icon..."); ///testing purposes please delete later

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);
  const passwordInput1 = useRef(null);
  const passwordInput2 = useRef(null);
  const visibilityIcon1 = useRef(null);
  const visibilityIcon2 = useRef(null);

  const handleVisibilityIconClick = (passwordInput, visibilityIcon) => {
    console.log("visibility clicked");
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
    <div className="main-login-page fg-page">
      <div className="login-container fg-cont">
        <div className="login-left">
          <MainBg />
        </div>

        <div className="login-right fg rp">
          <h1>Reset your Password</h1>
          <p className="fg-ct">Please enter your new password</p>

          <form className="login-form">
            <div class="password-section rp-p">
              <div className="form-group password-group rp-fg">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="password"
                    placeholder="Minimum of 8 Characters"
                    required
                    ref={passwordInput1}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <i
                    ref={visibilityIcon1}
                    className="fas fa-eye-slash login-icon"
                    aria-hidden="true"
                    onClick={() =>
                      handleVisibilityIconClick(passwordInput1, visibilityIcon1)
                    }
                  ></i>
                </div>
              </div>
              <div className="form-group password-group">
                <label htmlFor="repeat-password">Repeat Password</label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="repeat-password"
                    placeholder="Minimum of 8 Characters"
                    required
                    ref={passwordInput2}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <i
                    ref={visibilityIcon2}
                    className="fas fa-eye-slash login-icon"
                    aria-hidden="true"
                    onClick={() =>
                      handleVisibilityIconClick(passwordInput2, visibilityIcon2)
                    }
                  ></i>
                </div>
              </div>
            </div>

            <Button type="regular" className="login-signup-button">
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
