import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Services.css';

import title from '../../Pages/Images/title-icon.png';

const Services = () => {

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
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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


