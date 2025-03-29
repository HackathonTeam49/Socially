import React, { useState, useEffect } from "react";
import UserInfo from "../components/UserInfo";
import CreatedEvents from "../components/CreatedEvents";
import RsvpdEvents from "../components/RsvpdEvents";
import SavedEvents from "../components/SavedEvents";
import "../pages/UserDashboard.css";
import Header from "../components/Header";
import userI from "../assets/user-info-i.png";
import circleCheck from "../assets/circle-check.png";
import saved from "../assets/saved-i.png";
import userRsvp from "../assets/rsvp-i.png";
import logOutBtn from "../assets/logout.png";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LoaderFullPage from "../components/LoaderFullPage";
import leftArrow from "../assets/leftarrow.png";
import rightArrow from "../assets/rightarrow.png";
// import bgLine from "../assets/bg-line.png";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("userInfo");
  const [isLoading, setIsLoading] = useState(true); //used for delay rendering to display loader
  const [showSidebar, setShowSidebar] = useState(
    window.innerWidth <= 480 ? false : true
  );

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showSidebar);
  }, [showSidebar]);

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "userInfo":
        return <UserInfo />;
      case "createdEvents":
        return <CreatedEvents />;
      case "rsvpEvents":
        return <RsvpdEvents />;
      case "savedEvents":
        return <SavedEvents />;
      default:
        return <UserInfo />;
    }
  };

  // New switch for determining the display name
  const getComponentName = () => {
    switch (activeComponent) {
      case "userInfo":
        return "User Information";
      case "createdEvents":
        return "Created Events";
      case "rsvpEvents":
        return "Rsvp'd Events";
      case "savedEvents":
        return "Saved Events";
      default:
        return "User Information";
    }
  };

  if (isLoading) {
    return (
      <div>
        <Header className="user-header" />
        <LoaderFullPage />
      </div>
    );
  }

  return (
    <div className="user-d-page">
      <Header className="user-header" />
      <div className="user-dashboard">
        <div className="ud-container">
          <h1>Account Settings</h1>
          <div className="user-popup " onClick={toggleSidebar}>
            <img src={leftArrow} alt="User Information" />
            <span>{getComponentName()}</span>
            <img src={rightArrow} alt="User Information" />
          </div>
        </div>
        <div className=" user-dashboard-section">
          <div className=" user-dashboard-container">
            <div className="user-section">
              {showSidebar && (
                <div className="sidebar">
                  <ul
                    className="sidebar-nav "
                    onClick={() => setShowSidebar(false)}
                  >
                    <li>
                      <button
                        className={
                          activeComponent === "userInfo" ? "active" : ""
                        }
                        onClick={() => handleNavClick("userInfo")}
                      >
                        <span className="icon">
                          <img src={userI} alt="User Information" />
                        </span>
                        USER INFORMATION
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          activeComponent === "createdEvents" ? "active" : ""
                        }
                        onClick={() => handleNavClick("createdEvents")}
                      >
                        <span className="icon">
                          {" "}
                          <img src={circleCheck} alt="check" />
                        </span>
                        CREATED EVENTS
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          activeComponent === "rsvpEvents" ? "active" : ""
                        }
                        onClick={() => handleNavClick("rsvpEvents")}
                      >
                        <span className="icon">
                          {" "}
                          <img src={userRsvp} alt="User RSVP " />
                        </span>
                        RSVP’d EVENTS
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          activeComponent === "savedEvents" ? "active" : ""
                        }
                        onClick={() => handleNavClick("savedEvents")}
                      >
                        <span className="icon">
                          {" "}
                          <img src={saved} alt="saved " />
                        </span>
                        SAVED EVENTS
                      </button>
                    </li>
                  </ul>
                  <button className="logout-btn">
                    <span className="icon">
                      {" "}
                      <img src={logOutBtn} alt="log out button" />
                    </span>{" "}
                    Logout
                  </button>

                  <div />
                </div>
              )}

              <div className="main-content">{renderComponent()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
