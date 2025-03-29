import React from "react";
import { useEvents } from "../contexts/UseEvents";
import "./RsvpdEvents.css";
import eventImg from "../assets/event-img2.png";
import Button from "./Button";
import calendarIcon from "../assets/calendar.png";
import clockIcon from "../assets/clock.png";
import moneyIcon from "../assets/money.png";

function RsvpdEvents() {
  const { events, rsvpdEvents } = useEvents();

  // Placeholder events (shown only if no RSVP yet)
  const placeholderEvents = Array(20).fill({
    title: "GROUP THERAPY",
    subtitle: "WILLIAM SMITH THERAPY MEET",
    location: "Shoprite ground floor, Iwo Osun State",
    date: "Events Date",
    time: "8:00AM - 10:00 AM",
    price: "Free",
    eventImage: eventImg,
  });

  // Get actual RSVPd events
  const rsvpdEventList = events.filter((event) =>
    rsvpdEvents.some((rsvpEvent) => rsvpEvent.id === event.id)
  );

  // Show placeholders only if no RSVP yet
  const displayedEvents =
    rsvpdEventList.length > 0 ? rsvpdEventList : placeholderEvents;

  return (
    <section className="rsvpd-events">
      {displayedEvents.map((event, index) => (
        <div className="rsvpd-events-d" key={index}>
          <div className="rsvpd-img-container">
            <img className="rsvpd-img" alt="event" src={event.eventImage} />
          </div>
          <div className="rsvpd-main">
            <div className="rsvpd-title">
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
            <div className="rsvpd-btn">
              <Button className="rsvpd-btn1">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RsvpdEvents;
