import React from "react";
import "./SavedEvents.css";
import eventImg from "../assets/event-img2.png";
import Button from "./Button";
import { useEvents } from "../contexts/UseEvents";
import calendarIcon from "../assets/calendar.png";
import clockIcon from "../assets/clock.png";
import moneyIcon from "../assets/money.png";

function SavedEvents() {
  const { savedEvents } = useEvents();

  // Placeholder events (only shown when there are no saved events)
  const placeholderEvents = Array(20).fill({
    title: "GROUP THERAPY",
    subtitle: "WILLIAM SMITH THERAPY MEET",
    location: "Shoprite ground floor, Iwo Osun State",
    date: "Events Date",
    time: "8:00AM - 10:00 AM",
    price: "Free",
    eventImage: eventImg,
  });

  // Display saved events or placeholders if none exist
  const displayEvents =
    savedEvents.length > 0 ? savedEvents : placeholderEvents;

  return (
    <section className="saved-events">
      {displayEvents.map((event, index) => (
        <div className="saved-events-d" key={index}>
          <div className="se-img-container">
            <img className="se-img" alt="event" src={event.eventImage} />
          </div>
          <div className="se-main">
            <div className="se-title">
              <h2>{event.title}</h2>
              <h3>{event.subtitle}</h3>
            </div>
            <p>{event.location}</p>
            <div className="se-dt">
              <span className="se-tdm">
                <img alt="calendar" src={calendarIcon} />
                {event.date}
              </span>
              <span className="se-tdm">
                <img alt="clock" src={clockIcon} />
                {event.time}
              </span>
              <span className="se-tdm">
                <img alt="price" src={moneyIcon} />
                {event.price}
              </span>
            </div>
            <div className="se-btn">
              <Button className="se-btn1">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SavedEvents;
