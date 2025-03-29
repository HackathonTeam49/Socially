import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import icon from "../assets/user-icon.png";
import user from "../assets/user.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [iconSrc, setIconSrc] = useState(icon);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSrc(user);
      } else {
        setIconSrc(icon);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHamburgerClick = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleUserIconClick = () => {
    navigate("/app/dashboard");
  };

  return (
    <header>
      <div className="container">
        <div
          className={`hamburger ${showNavLinks ? "active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>
        <div className={`nav-links ${showNavLinks ? "active" : ""}`}>
          <NavLink
            to="/app"
            end
            className={({ isActive }) =>
              location.pathname === "/" || isActive
                ? "nav-item active"
                : "nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/app/create-events"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Create Event
          </NavLink>
          <NavLink
            to="/app/your-hubbies"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Your Hobbies
          </NavLink>
          <NavLink
            to="/app/news"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            News
          </NavLink>
        </div>
        <div className="user-icon" onClick={handleUserIconClick}>
          <img src={iconSrc} alt="User Icon" className="header-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
