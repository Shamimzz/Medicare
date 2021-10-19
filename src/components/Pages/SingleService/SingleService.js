import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './SingleService.css'
import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {id, name, des, img, price} = service;
    return (
        <div>    
           {Array.from({ length: 1 }).map((_, idx) => (
             <Col>
               <Card>
                   <Card.Img className="img" variant="top" src={img}/>
                   <Card.Body className="shadow-sm">
                     <Card.Title className="name">{name}</Card.Title>
                     <h4 className="price"> <FcCurrencyExchange/> {price}</h4>
                     <Card.Text className="des">{des.slice(0, 80)}</Card.Text>
                     <Link className='mt-2 mb-3' to={`/appointment/${id}`}>
                       <button className="btn btn-info">Get An Appointment</button>
                     </Link>
                   </Card.Body>
               </Card>
             </Col>
           ))}
        </div>
    );
};

export default SingleService;