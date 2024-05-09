import React, { useEffect, useState } from 'react';
import { Calendar, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parseISO, startOfWeek, getDay } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';
import axios from 'axios';

import enGB from 'date-fns/locale/en-GB';

const localizer = dateFnsLocalizer({
  format: (date, formatString, locale) => date.toLocaleString(locale),
  parse: (dateStr) => parseISO(dateStr),
  startOfWeek: () => startOfWeek(new Date(), { locale: enGB }),
  getDay: (date) => getDay(date),
  locales: { 'en-GB': enGB },
});

const AllUsersCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/avaibility/all') // Endpoint to fetch all users' availability
      .then((response) => {
        if (Array.isArray(response.data)) {
          const formattedEvents = response.data.map((item) => {
            if (!item.date) return null; // Ensure there's a date to process
            const parsedDate = parseISO(item.date);
            return {
              start: parsedDate,
              end: parsedDate,
              title: `${item.firstName} ${item.lastName}`, // No comments, just user info
            };
          }).filter(Boolean); // Remove any null values

          setEvents(formattedEvents); // Set the formatted events
        } else {
          console.error('Expected an array, but got:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching available days:', error));
  }, []); // Ensure this runs once when the component is mounted

  return (
    <div>
      <h2>All Users Availability Calendar</h2>
      {events.length > 0 ? (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']} // Default calendar views
          defaultView={Views.MONTH}
          style={{ height: 500 }}
        />
      ) : (
        <p>No available days to display.</p>
      )}
    </div>
  );
};

export default AllUsersCalendar;
