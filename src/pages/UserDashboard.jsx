import React, { useState, useEffect } from "react";
import UserInfo from "../components/UserInfo";
import CreatedEvents from "../components/CreatedEvents";
import SavedEvents from "../components/SavedEvents";
import RsvpdEvents from "../components/RsvpdEvents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoaderFullPage from "../components/LoaderFullPage";
import leftArrow from "../assets/leftarrow.png";
import rightArrow from "../assets/rightarrow.png";
import userI from "../assets/user-info-i.png";
import circleCheck from "../assets/circle-check.png";
import saved from "../assets/saved-i.png";
import userRsvp from "../assets/rsvp-i.png";
import logOutBtn from "../assets/logout.png";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("userInfo");
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 480);
  const [componentClass, setComponentClass] = useState("user-info-class"); // Manage component class dynamically

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showSidebar);
  }, [showSidebar]);

  useEffect(() => {
    const handleResize = () => setShowSidebar(window.innerWidth > 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Short delay for better UX
    return () => clearTimeout(timer);
  }, [activeComponent]);

  // Update component class dynamically when activeComponent changes
  useEffect(() => {
    switch (activeComponent) {
      case "userInfo":
        setComponentClass("user-info-class");
        break;
      case "createdEvents":
        setComponentClass("created-events-class");
        break;
      case "rsvpEvents":
        setComponentClass("rsvp-events-class");
        break;
      case "savedEvents":
        setComponentClass("saved-events-class");
        break;
      default:
        setComponentClass("user-info-class");
    }
  }, [activeComponent]);

  const getComponentName = () => {
    switch (activeComponent) {
      case "userInfo":
        return "User Information";
      case "createdEvents":
        return "Created Events";
      case "rsvpEvents":
        return "RSVP’d Events";
      case "savedEvents":
        return "Saved Events";
      default:
        return "User Information";
    }
  };

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

  return (
    <div className="user-d-page">
      <Header className="user-header" />

      <div className="user-dashboard">
        <div className="ud-container">
          <h1>Account Settings</h1>
          <div className="user-popup" onClick={toggleSidebar}>
            <img src={leftArrow} alt="Left Arrow" />
            <span>{getComponentName()}</span>
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </div>

        <div className={`user-dashboard-container ${componentClass}`}>
          <div className="user-section">
            {showSidebar && (
              <div className="sidebar">
                <ul
                  className="sidebar-nav"
                  onClick={() => setShowSidebar(window.innerWidth > 480)}
                >
                  <li>
                    <button
                      className={activeComponent === "userInfo" ? "active" : ""}
                      onClick={() => setActiveComponent("userInfo")}
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
                      onClick={() => setActiveComponent("createdEvents")}
                    >
                      <span className="icon">
                        <img src={circleCheck} alt="Created Events" />
                      </span>
                      CREATED EVENTS
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeComponent === "rsvpEvents" ? "active" : ""
                      }
                      onClick={() => setActiveComponent("rsvpEvents")}
                    >
                      <span className="icon">
                        <img src={userRsvp} alt="RSVP’d Events" />
                      </span>
                      RSVP’d EVENTS
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeComponent === "savedEvents" ? "active" : ""
                      }
                      onClick={() => setActiveComponent("savedEvents")}
                    >
                      <span className="icon">
                        <img src={saved} alt="Saved Events" />
                      </span>
                      SAVED EVENTS
                    </button>
                  </li>
                </ul>
                <button className="logout-btn">
                  <span className="icon">
                    <img src={logOutBtn} alt="Logout" />
                  </span>
                  Logout
                </button>
              </div>
            )}

            {/* Show loader only inside the main content area */}
            <div className={`main-content ${componentClass}`}>
              {isLoading ? (
                <div className="loader-ud-page">
                  <LoaderFullPage />
                </div>
              ) : (
                renderComponent()
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;
