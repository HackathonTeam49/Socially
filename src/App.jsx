import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/CreateAccount";
import Volunteer from "./pages/Volunteer";
import "./App.css";
import EmailConfirmation from "./pages/ConfirmEmail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
