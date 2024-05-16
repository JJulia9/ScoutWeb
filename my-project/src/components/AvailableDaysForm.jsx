import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const AvailableDaysForm = () => {
  const [avaibilityDate, setAvaibilityDate] = useState('');
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;

    try {
      const response = await axios.post(`http://localhost:5000/user/${userId}/avaibility`, { date: avaibilityDate });
      setMessage(" Available day submitted successfully!");
      
    } catch (error) {
      console.error('Server error:', error);
      setMessage(" Sorry, something went wrong! Please try later ...");
    }
  };

  return (
  
<div className="flex  justify-center bg-secondary py-12 px-4 sm:px-6 lg:px-8 relative items-center mb-20">
<div className="absolute  inset-0 z-0"></div>
<div className="sm:max-w-lg w-full p-10 bg-white rounded-lg shadow-lg z-10">
  <div className="text-center">
    <h2 className="mt-5 text-3xl font-bold text-primary font-heading">
      Available to help?
    </h2>
    <p className="mt-3 text-sm text-gray-400">THEN CHOOSE A DAY HERE</p>
  </div>

      <form className="mt-8 space-y-3"  method='POST'>
                  <div className="grid grid-cols-1 space-y-2">
                      <label htmlFor="date" className="text-sm font-bold text-gray-500 tracking-wide"></label>
                          <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary" 
                          type="date"
                          id="date"
                          value={avaibilityDate}
                          onChange={(e) => setAvaibilityDate(e.target.value)}
                          required
                          />
                          
                  </div>

                           
                  <div>
                      <button type="submit" onClick={handleSubmit} className="my-5 w-full flex justify-center bg-primary text-gray-100 p-4  rounded-xl tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-yellow-400 shadow-lg cursor-pointer transition ease-in duration-300">
                      Submit
                  </button>

                 
                  </div>

                  {message && (
              <div className="font-paragrapg mt-1 text-m text-accent alert alert-danger text-center" role="alert">
                  {message}
              </div>
          )}

          </form>
      </div>
      
  </div>
  );
};

export default AvailableDaysForm;
