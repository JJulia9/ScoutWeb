import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; // Import moment.js for date formatting


const Events = () => {
    const [events, setEvents] = useState([]);
    

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/events");
                if (response && response.data) {
                    setEvents(response.data);
                } else {
                    console.error("Invalid response from the server:", response);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="mx-2 mb-20">
                    <h3 className="text-secondary font-heading text-xl sm:text-2xl font-medium max-w-screen-xl mx-auto pb-5 p-2"> Upcomming Events </h3>

            {events.map((event) => (
                <div key={event._id} className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
                    <div className="p-8 flex">
                        <div className="p-4 mr-5 bg-secondary rounded-xl">
                            <p className="text-4xl font-bold text-white font-paragraph">{moment(event.date).format('MMMM DD, YYYY')}</p>
                        </div>
                        <div className="justify-center  flex flex-col">
                            <div className="uppercase tracking-wide text-m text-secondary font-heading font-semibold">{event.name}</div>
                            <p className="mt-2 text-text font-paragraph">{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Events;
