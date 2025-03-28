import React from "react";
import "./CreatedEvents.css";
import eventImg from "../assets/event-img2.png";
import Button from "./Button";
import { useEvents } from "../contexts/UseEvents";
import calendarIcon from "../assets/calendar.png";
import clockIcon from "../assets/clock.png";
import moneyIcon from "../assets/money.png";

function CreatedEvents() {
  const { events } = useEvents();

  // The Defined 4 static placeholder events(i made it 7 so the you will see how the scroll will be)then when there is an event it chnages the default event one by one
  const placeholderEvents = Array(20).fill({
    title: "GROUP THERAPY",
    subtitle: "WILLIAM SMITH THERAPY MEET",
    location: "Shoprite ground floor, Iwo Osun State",
    date: "Events Date",
    time: "8:00AM - 10:00 AM",
    price: "Free",
    eventImage: eventImg,
  });

  const displayEvents = events.length > 0 ? events : placeholderEvents;

  return (
    <section className="created-events">
      {displayEvents.map((event, index) => (
        <div className="created-events-d" key={index}>
          <div className="ce-img-container">
            <img className="ce-img" alt="event" src={event.eventImage} />
          </div>
          <div className="ce-main">
            <div className="ce-title">
              <h2>{event.title}</h2>
              <h3>{event.subtitle}</h3>
            </div>
            <p>{event.location}</p>
            <div className="rsvpd-dt">
              <span className="rsvpd-tdm">
                <img alt="calendar" src={calendarIcon} />
                {event.date}
              </span>
              <span className="rsvpd-tdm">
                <img alt="clock" src={clockIcon} />
                {event.time}
              </span>
              <span className="rsvpd-tdm">
                <img alt="price" src={moneyIcon} />
                {event.price}
              </span>
            </div>
            <div className="ce-btn">
              <Button className="ce-btn1">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CreatedEvents;
