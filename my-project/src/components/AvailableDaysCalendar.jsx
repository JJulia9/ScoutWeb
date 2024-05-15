import React, { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';

const AllUsersCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/avaibility/all') // Endpoint to fetch all users' availability
      .then((response) => {
        if (Array.isArray(response.data)) {
          const formattedEvents = response.data.map((item) => {
            if (!item.date) return null; // Ensure there's a date to process
            return {
              start: moment(item.date).startOf('day').toDate(), // Start of the day
              end: moment(item.date).endOf('day').toDate(), // End of the day
              title: `${item.firstName} ${item.lastName}`, // Helper's name
            };
          }).filter(Boolean); // Remove any null values

          setEvents(formattedEvents); // Set the formatted events
        } else {
          console.error('Expected an array, but got:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching available days:', error));
  }, []); // Ensure this runs once when the component is mounted



  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = '#F1B22D'; // Change color as needed
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  return (
    <div className="max-w-screen-xl mx-2 my-10 ">
      <h3 className="text-primary font-heading text-xl sm:text-2xl font-medium max-w-screen-xl mx-auto pb-3"> Helpers Availability </h3>
      <p className="text-text font-paragraph pb-5">please rotate for mobile view</p> 

      {events.length > 0 ? (
        <Calendar
          localizer={momentLocalizer(moment)}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']} // Default calendar views
          defaultView={Views.MONTH}
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter} // Apply custom styles to events
          />
       
      ) : (
        <p>No available days to display.</p>
      )}
    </div>
  );
};

export default AllUsersCalendar;
