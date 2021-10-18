import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Navbar } from 'react-bootstrap';
import './Login.css';

import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import useFirebase from '../../../UseFirebase/Usefirebase';



const Login = () => {

    const {signInUseingGoogle, handelFacbook} = useFirebase();

    return (
     <div className="container w-50 m-auto">
        <h2>Log In Page</h2>
      <div>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="email" placeholder="Enter email"/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="Password"/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out"/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Button onClick={signInUseingGoogle} className="btn btn-warning" type="submit"><FaGoogle/></Button>
            <Button onClick={handelFacbook} className="btn btn-primary" type="submit"><FaFacebook/></Button>
         </Form.Group><Button className="btn btn-info" type="submit">Log In</Button>

       </div>
     </div>
    );
};

export default Login;