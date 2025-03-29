import React, { useState, useEffect } from "react";
import { EventContext } from "./EventContextDefinition";
import { v4 as uuidv4 } from "uuid"; // Import UUID used it to created id for each created events

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("createdEvents")) || [];
    } catch {
      return [];
    }
  });

  const [rsvpdEvents, setRsvpdEvents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("rsvpdEvents")) || [];
    } catch {
      return [];
    }
  });

  const [savedEvents, setSavedEvents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedEvents")) || [];
    } catch {
      return [];
    }
  });

  // Sync events with localStorage only if changed
  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("createdEvents")) || [];
    if (JSON.stringify(storedEvents) !== JSON.stringify(events)) {
      localStorage.setItem("createdEvents", JSON.stringify(events));
    }
  }, [events]);

  // Sync rsvpdEvents with localStorage only if changed
  useEffect(() => {
    const storedRsvps = JSON.parse(localStorage.getItem("rsvpdEvents")) || [];
    if (JSON.stringify(storedRsvps) !== JSON.stringify(rsvpdEvents)) {
      localStorage.setItem("rsvpdEvents", JSON.stringify(rsvpdEvents));
    }
  }, [rsvpdEvents]);

  // Sync savedEvents with localStorage only if changed
  useEffect(() => {
    const storedSavedEvents =
      JSON.parse(localStorage.getItem("savedEvents")) || [];
    if (JSON.stringify(storedSavedEvents) !== JSON.stringify(savedEvents)) {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }
  }, [savedEvents]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    const eventWithId = { id: uuidv4(), ...newEvent };

    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, eventWithId];
      localStorage.setItem("createdEvents", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  // Function to RSVP to an event
  const rsvpEvent = (eventId) => {
    setRsvpdEvents((prevRsvpdEvents) => {
      const rsvpIds = new Set(prevRsvpdEvents.map((event) => event.id));
      if (rsvpIds.has(eventId)) return prevRsvpdEvents; // Prevent duplicates

      const eventToRsvp = events.find((event) => event.id === eventId);
      if (!eventToRsvp) return prevRsvpdEvents; // Ensure event exists

      const updatedRsvps = [...prevRsvpdEvents, eventToRsvp];
      localStorage.setItem("rsvpdEvents", JSON.stringify(updatedRsvps));
      return updatedRsvps;
    });
  };

  // Function to save an event
  const saveEvent = (eventId) => {
    setSavedEvents((prevSavedEvents) => {
      const savedIds = new Set(prevSavedEvents.map((event) => event.id));
      if (savedIds.has(eventId)) return prevSavedEvents; // Prevent duplicates

      const eventToSave = events.find((event) => event.id === eventId);
      if (!eventToSave) return prevSavedEvents; // Ensure event exists

      const updatedSavedEvents = [...prevSavedEvents, eventToSave];
      localStorage.setItem("savedEvents", JSON.stringify(updatedSavedEvents));
      return updatedSavedEvents;
    });
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        rsvpdEvents,
        rsvpEvent,
        savedEvents,
        saveEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
