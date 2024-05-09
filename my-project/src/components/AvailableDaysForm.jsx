import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const AvailableDaysForm = () => {
  const [avaibilityDate, setAvaibilityDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    try {
      const response = await axios.post(`http://localhost:5000/user/${userId}/avaibility`, { date: avaibilityDate });
      
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  return (
    <form method='POST'>
      <div>
        <label htmlFor="date">Available Day:</label>
        <input
          type="date"
          id="date"
          value={avaibilityDate}
          onChange={(e) => setAvaibilityDate(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
};

export default AvailableDaysForm;
