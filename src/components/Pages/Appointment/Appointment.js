import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Details of the appointment of {id}</h2>
        </div>
    );
};

export default Appointment;