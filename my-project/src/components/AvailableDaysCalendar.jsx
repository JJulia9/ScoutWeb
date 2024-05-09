import React, { useEffect, useState } from 'react';
import { Calendar, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parseISO, startOfWeek, getDay } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';
import axios from 'axios';

const locales = {
  'en-GB': require('date-fns/locale/en-GB'), // Adjust locale if needed
};

const localizer = dateFnsLocalizer({
  format,
  parse: (dateStr, formatStr, locale) => parseISO(dateStr),
  startOfWeek: () => startOfWeek(new Date(), { locale: locales['en-GB'] }),
  getDay: (date) => getDay(date),
  locales,
});

const AvailableDaysCalendar = ({ userId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch availability data from the backend
    axios
      .get(`/user/${userId}/availability`)
      .then((response) => {
        const formattedEvents = response.data.map((item) => ({
          start: parseISO(item.date), // Convert to a Date object
          end: parseISO(item.date), // Same for start and end to mark specific days
          title: item.comments || 'Available', // Add comments or a default title
        }));
        setEvents(formattedEvents);
      })
      .catch((error) => console.error('Error fetching available days:', error));
  }, [userId]); // Dependency on userId to refetch when it changes

  return (
    <div>
      <h2>Helper Availability Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']} // Available views
        defaultView={Views.MONTH} // Default view
        style={{ height: 500 }} // Specific height
      />
    </div>
  );
};

export default AvailableDaysCalendar;
