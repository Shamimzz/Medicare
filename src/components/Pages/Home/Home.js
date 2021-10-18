import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Extra1 from '../Extra1/Extra1';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Services></Services>
            <Extra1></Extra1>
            <Contact></Contact>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;