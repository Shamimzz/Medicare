import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
        <div className="banner d-flex flex-column justify-content-center" >
            <div className="heroText">
               <h4 className="we">WE PROVIDE TOTAL</h4>
               <h1 className="Care">HEALTH CARE SOLUTION</h1>
               <div >
                 <Button to="/services" as={Link} className="search-btn text-decoration-none">View Details</Button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Banner; 