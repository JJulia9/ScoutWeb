import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/shared/Home';
import './App.css';
import Register from './pages/shared/Register.jsx';
import Login from './pages/shared/Login.jsx';
import CubDashboard from './pages/cubs/CubDashboard';
import LeaderDashboard from './pages/leaders/LeaderDashboard';
import HelperDashboard from './pages/rHelpers/HelperDashboard';

function App() {
  

  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cubdashboard" element={<CubDashboard />} />
          <Route path="/leaderdashboard" element={<LeaderDashboard />} />
          <Route path="/helperdashboard" element={<HelperDashboard />} />

        </Routes>
      </Router>


  </>

  )
}


export default App 
