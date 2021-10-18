import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
        <div className="banner d-flex flex-column justify-content-center" >
            <div className="heroText">
               <h4 className="we">WE PROVIDE TOTAL</h4>
               <h1 className="Care">HEALTH CARE SOLUTION</h1>
               <div >
                 <button className="search-btn">View Details</button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Banner; 