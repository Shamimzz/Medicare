
import React from 'react';
import './Doctors.css';

// Exports Images from local.
import doc1 from './doctors/doctors-1.jpg'
import doc2 from './doctors/doctors-2.jpg'
import doc3 from './doctors/doctors-3.jpg'
import doc4 from './doctors/doctors-4.jpg'

// Reacts Fonts 
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

import title from '../../Pages/Images/title-icon.png';

const Doctors = () => {
    return (
         <div>        
        <section id="doctors" class="doctors mt-5 mb-5">
       <div class="container">

        <div class="section-title mb-5">
          <h2>Doctors</h2>
            <div class="title-icon">
                <img class="mb-10" src={title} alt="title"/>
            </div>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={doc1} alt="Logo" class="img-fluid"/></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Medical Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <Link to="*"><FaTwitter /></Link>
                  <Link to="*"><FaFacebook /></Link>
                  <Link to="*"><BsInstagram /></Link>
                  <Link to="*"><AiFillLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={doc2} alt="Logo" class="img-fluid"/> </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anesthesiologist</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                  <Link to="*"><FaTwitter /></Link>
                  <Link to="*"><FaFacebook /></Link>
                  <Link to="*"><BsInstagram /></Link>
                  <Link to="*"><AiFillLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doc3} alt="Logo" class="img-fluid"/> </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Cardiology</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <Link to="*"><FaTwitter /></Link>
                  <Link to="*"><FaFacebook /></Link>
                  <Link to="*"><BsInstagram /></Link>
                  <Link to="*"><AiFillLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"> <img src={doc4} alt="Logo" class="img-fluid"/></div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurosurgeon</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <Link to="*"><FaTwitter /></Link>
                  <Link to="*"><FaFacebook /></Link>
                  <Link to="*"><BsInstagram /></Link>
                  <Link to="*"><AiFillLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Doctors;