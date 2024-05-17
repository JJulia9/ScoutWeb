import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import LoadingSpinner from './components/LoadingSpinner.jsx'; // Import your loading spinner component

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// App component
function App() {
  const [isLoading, setIsLoading] = useState(true); // State variable for loading indicator

  useEffect(() => {
    // Simulate page loading
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay (simulated async action)
    }, 2000); // Simulate a 2-second delay

    // Clean up
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Router>
        {isLoading ? (
          // Render loading spinner if loading is true
          <LoadingSpinner />
        ) : (
          // Render app content when loading is false
          <>
            <ScrollToTop />
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
              <Route path="/training" element={<Training />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
