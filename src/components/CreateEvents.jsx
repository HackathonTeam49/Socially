import React from "react";
import "../pages/UserDashboard.css";
import Header from "../components/Header";
import "./CreateEvents.css";
import Footer from "../components/Footer";

import LoaderFullPage from "../components/LoaderFullPage";

const UserDashboard = () => {
  // const [isLoading, setIsLoading] = useState(true); //used for delay rendering to display loader

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // simulate a 2-second loading delay
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Header className="user-header" />
  //       <LoaderFullPage />
  //     </div>
  //   );
  // }

  return (
    <div className="user-d-page">
      <Header className="user-header" />
      <div>
        <section className="events">
          <h1>CREATE EVENT PAGE you</h1>S
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;
