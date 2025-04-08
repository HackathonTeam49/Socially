import PropTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";

// Create the context
const EventContext = createContext();

const initialState = {
  events: [],
  // Other state properties...
};

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case "setEvents":
      return { ...state, events: action.payload };
    // Add other cases as needed
    default:
      throw new Error("Unknown action");
  }
}

function EventProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setEvents(events) {
    dispatch({ type: "setEvents", payload: events });
  }

  return (
    <EventContext.Provider value={{ state, setEvents }}>
      {children}
    </EventContext.Provider>
  );
}

// PropTypes validation for `children`
EventProvider.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be a valid React node
};

function useEvent() {
  const context = useContext(EventContext);
  if (context === undefined)
    throw new Error("EventContext was used outside EventProvider");
  return context;
}

export { EventProvider, useEvent };
