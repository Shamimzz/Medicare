import Button from 'react-bootstrap/Button'
import React from 'react';
import './Extra1.css';
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Extra1 = () => {

    return (
        <div className="mt-5 Extra1">
           <div className="bannerImg">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pt-70 pb-140 mt-50 row-title res-991-mt-0 res-991-pb-30 text-center">
                            <div className="post-content">
                            <div className="section-title clearfix ">
                                <div className="mb-4 fs-1">
                                    <Button href="http://www.youtube.com" className="btn-play"><IoLogoYoutube/></Button>
                                </div>
                                <div className="title-header pt-2">
                                    <h5 className="text-muted">Time can't be Resisted, But Aging Can</h5>
                                    <h2 className="title">Commited To Trusted Health Care Delmont</h2>
                                </div>
                            </div>
                            <h4>Get Your Quote or Call:<span className="text-primary"> (0080 123-453-789)</span> </h4>
                            <div className="mt-50 res-991-mt-30">
                                <Button to="/login" as={Link} id="btn" variant="outline-primary">APPOINTMENT</Button> {' '}
                                <Button className="btn2" id="btn" variant="info">SEE HOW WE CAN HELP</Button> {' '}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Extra1;