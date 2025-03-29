import React, { useEffect, useState } from "react";
import "../pages/UserDashboard.css";
import Header from "../components/Header";
import "./MainPage.CSS";
import Footer from "../components/Footer";

import LoaderFullPage from "../components/LoaderFullPage";
import Button from "../components/Button";
import EventsNearYou from "../components/EventsNearYou";
import UsersNearYou from "../components/UsersNearYou";
import Hobbies from "../components/Hobbies";

const UserDashboard = () => {
  const [isLoading, setIsLoading] = useState(true); //used for delay rendering to display loader

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

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
      <EventsNearYou />
      <UsersNearYou />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default UserDashboard;
