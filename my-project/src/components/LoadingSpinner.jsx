// LoadingSpinner.jsx

import React from 'react';
import './LoadingSpinner.css'; // Import CSS for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <div className="spinner">
            <img src="./loading.svg" alt="Loading spinner" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
