import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/CreateAccount';
import Volunteer from './pages/Volunteer';
import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/volunteer" element={<Volunteer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;