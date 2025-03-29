// src/contexts/useEvents.js
import { useContext } from "react";
import { EventContext } from "./EventContextDefinition"; // Updated to match new file

export const useEvents = () => useContext(EventContext);
