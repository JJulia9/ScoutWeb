import React from 'react';
import AvailableDaysForm from '../../components/AvailableDaysForm';
import AvailableDaysCalendar from '../../components/AvailableDaysCalendar';

const HelperDashboard = () => {
    return (
        <div>
            <h1>Helper Dashboard</h1>
            <AvailableDaysForm />
            <AvailableDaysCalendar />

        </div>
    )
}

export default HelperDashboard;