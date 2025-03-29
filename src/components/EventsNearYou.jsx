import React, { useState } from "react";
import Button from "./Button";
import "./EventsNearYou.CSS";

function EventsNearYou() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <section className="events-ny">
        <div className="e-w">
          <h1>Events Near You</h1>
          <p className="ce-p">
            it is beneficial to attend these events to connect with people near
            you.Don't worry! These events have all been vetted for safety
          </p>
        </div>

        <p className="ce-p"></p>
        <div className="events-slider-ny">
          <div className="container">
            <div className="events-details-ny">
              <div className="ny-main">
                <div className="ny-title">
                  <h2>GROUP THERAPY</h2>
                  <h3>WILLIAM SMITH THERAPY MEET</h3>
                </div>
                <p>Events location i.e Shoprite ground floor, Iwo Osun State</p>
                <div className="eny-dt">
                  <span className="eny-tdm ">
                    <img alt="calendar" src="/src/assets/calendar.png" />
                    Events Date
                  </span>
                  <span className="eny-tdm ">
                    <img alt="clock" src="/src/assets/clock.png" />
                    8:00AM - 10:00 AM
                  </span>
                  <span className="eny-tdm ">
                    <img alt="price" src="/src/assets/money.png" />
                    free
                  </span>
                </div>
                <div className="eny-btn">
                  <Button className={`eny-btn1 ${isHovered ? "hovered" : ""}`}>
                    RSVP
                  </Button>
                  <Button
                    className={`eny-btn2 ${isHovered ? "clicked" : ""}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    view Details
                  </Button>
                </div>
              </div>
              <img
                className="event-img"
                alt="event"
                src="/src/assets/event-img.png"
              />
            </div>

            <div className="events-details-ny">
              <div className="ny-main">
                <div className="ny-title">
                  <h2>GROUP THERAPY</h2>
                  <h3>WILLIAM SMITH THERAPY MEET</h3>
                </div>
                <p>Events location i.e Shoprite ground floor, Iwo Osun State</p>
                <div className="eny-dt">
                  <span className="eny-tdm ">
                    <img alt="calendar" src="/src/assets/calendar.png" />
                    Events Date
                  </span>
                  <span className="eny-tdm ">
                    <img alt="clock" src="/src/assets/clock.png" />
                    8:00AM - 10:00 AM
                  </span>
                  <span className="eny-tdm ">
                    <img alt="price" src="/src/assets/money.png" />
                    free
                  </span>
                </div>
                <div className="eny-btn">
                  <Button className={`eny-btn1 ${isHovered ? "hovered" : ""}`}>
                    RSVP
                  </Button>
                  <Button
                    className={`eny-btn2 ${isHovered ? "clicked" : ""}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    view Details
                  </Button>
                </div>
              </div>
              <img
                className="event-img"
                alt="event"
                src="/src/assets/event-img.png"
              />
            </div>

            <div className="events-details-ny">
              <div className="ny-main">
                <div className="ny-title">
                  <h2>GROUP THERAPY</h2>
                  <h3>WILLIAM SMITH THERAPY MEET</h3>
                </div>
                <p>Events location i.e Shoprite ground floor, Iwo Osun State</p>
                <div className="eny-dt">
                  <span className="eny-tdm ">
                    <img alt="calendar" src="/src/assets/calendar.png" />
                    Events Date
                  </span>
                  <span className="eny-tdm ">
                    <img alt="clock" src="/src/assets/clock.png" />
                    8:00AM - 10:00 AM
                  </span>
                  <span className="eny-tdm ">
                    <img alt="price" src="/src/assets/money.png" />
                    free
                  </span>
                </div>
                <div className="eny-btn">
                  <Button className={`eny-btn1 ${isHovered ? "hovered" : ""}`}>
                    RSVP
                  </Button>
                  <Button
                    className={`eny-btn2 ${isHovered ? "clicked" : ""}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    view Details
                  </Button>
                </div>
              </div>
              <img
                className="event-img"
                alt="event"
                src="/src/assets/event-img.png"
              />
            </div>

            <div className="events-details-ny">
              <div className="ny-main">
                <div className="ny-title">
                  <h2>GROUP THERAPY</h2>
                  <h3>WILLIAM SMITH THERAPY MEET</h3>
                </div>
                <p>Events location i.e Shoprite ground floor, Iwo Osun State</p>
                <div className="eny-dt">
                  <span className="eny-tdm ">
                    <img alt="calendar" src="/src/assets/calendar.png" />
                    Events Date
                  </span>
                  <span className="eny-tdm ">
                    <img alt="clock" src="/src/assets/clock.png" />
                    8:00AM - 10:00 AM
                  </span>
                  <span className="eny-tdm ">
                    <img alt="price" src="/src/assets/money.png" />
                    free
                  </span>
                </div>
                <div className="eny-btn">
                  <Button className={`eny-btn1 ${isHovered ? "hovered" : ""}`}>
                    RSVP
                  </Button>
                  <Button
                    className={`eny-btn2 ${isHovered ? "clicked" : ""}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    view Details
                  </Button>
                </div>
              </div>
              <img
                className="event-img"
                alt="event"
                src="/src/assets/event-img.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsNearYou;
