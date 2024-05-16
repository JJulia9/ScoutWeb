import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/shared/Home';
import './App.css';
import Register from './pages/shared/Register.jsx';
import Login from './pages/shared/Login.jsx';
import CubDashboard from './pages/cubs/CubDashboard';
import LeaderDashboard from './pages/leaders/LeaderDashboard';
import HelperDashboard from './pages/rHelpers/HelperDashboard';
import Badges from './pages/shared/Badges';
import About from './pages/shared/About.jsx';
import GalleryPage from './pages/shared/Gallery.jsx';
import Games from './pages/shared/Games.jsx';
import Training from './components/Training.jsx';

function App() {
  

  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cubdashboard" element={<CubDashboard />} />
          <Route path="/leaderdashboard" element={<LeaderDashboard />} />
          <Route path="/helperdashboard" element={<HelperDashboard />} />

          <Route path="/badges" element={<Badges />} />
          <Route path="/training" element={<Training />} />

        </Routes>
      </Router>


  </>

  )
}


export default App 
