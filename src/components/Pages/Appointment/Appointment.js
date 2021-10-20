import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Appointment.css';
import { FcCurrencyExchange } from "react-icons/fc";

const Appointment = () => {
    const {id} = useParams();

    const [appointment, setAppointment] = useState({});

    useEffect( () => {
        fetch('/services.json')
          .then(res => res.json())
          .then(data=>{
            const found = data.find(appoint => appoint.id === parseInt(id));
            setAppointment(found);
            console.log(data);
          })
    }, [])


    return (
        <div>
           <Card className="appoint">
               <Card.Img className="img" variant="top" src={appointment.img}/>
               <Card.Body className="shadow-sm">
                 <Card.Title className="name">{appointment.name}</Card.Title>
                 <h4 className="price"> <FcCurrencyExchange/> {appointment.price}</h4>
                 <Card.Text className="des">{appointment.des}</Card.Text>
                 <Link className='mt-2 mb-3' to={`/appointment/${id}`}>
                 </Link>
               </Card.Body>
           </Card>
        </div>
    );
};

export default Appointment;