import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/CreateUser";
import Volunteer from "./pages/Volunteer";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import ConfirmEmail from "./pages/ConfirmEmail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
