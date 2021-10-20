import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Services.css';

import title from '../../Pages/Images/title-icon.png';

const Services = () => {
    
    // calling json data for showing those data on service section.
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('/services.json')
          .then(res => res.json())
          .then(data=> setServices(data))
    }, [])

    return (
        <div className="container mt-5">
        <div class="section-title">
          <h2>SERVICES</h2>
            <div class="title-icon">
                <img class="mb-10" src={title} alt="title"/>
            </div>
          <p>Keep your health in check with MediClinic! Packed with 12 easy customizable homepages and a modern collection of layouts perfect for doctor showcase,. Present every aspect of your medical clinic or create detailed doctors timetable with MediClinic’s great functionalities.</p>
        </div>
          <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <SingleService
                key={service.id}
                service={service}
                ></SingleService>)
            }   
         </Row> 
        </div>
    );
};

export default Services;


