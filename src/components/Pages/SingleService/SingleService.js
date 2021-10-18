import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './SingleService.css'
import { FcCurrencyExchange } from "react-icons/fc";

const SingleService = ({service}) => {
    const {name, des, img, price} = service;
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
                   </Card.Body>
               </Card>
             </Col>
           ))}
        {/* <Link to={`/booking/${id}`}>
         <button className="btn btn-danger">Booking</button>
        </Link> */}
        </div>
    );
};

export default SingleService;