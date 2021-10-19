import Button from '@restart/ui/esm/Button';
import React from 'react';
// import { Form } from 'react-bootstrap';
import './Login.css';

// Reacts Icons
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";


import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {

  const {handeleGoogleAuth, handelFacbook} = useAuth();

  // used for privateRouter locations.
  const location = useLocation();  
  const history = useHistory();

  // shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo. 'shop' ...
  const redirect_uri = location.state?.from || '/home';

  const handelGoogle = () => {
    handeleGoogleAuth()
    .then((result) => {
       history.push(redirect_uri) 
    })
  }

    return (
     <div className="m-auto">

      <div className="signup-form">
            <div action=''>
            <h2>Please Log In First</h2>
              <div className="form-group">       	
                </div>
                <div className="form-group">
                	<input className="form-control" type="email" placeholder="Email" required="required"/>
                </div>
        	    	<div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
                </div> 
                <div>
                </div>     
        	    	<div className="form-group">
                  <Button type="submit" className="btn btn-info  btn-block">Log In</Button>
                </div>
            </div>
           <div className="mb-3" controlId="formBasicCheckbox">
              <h6 className="text-muted">Sign In Others.</h6>
              <Button onClick={handelGoogle} className="btn btn-sm"type="submit"><FaGoogle color="red" fontSize="20px"/></Button>
              
              <Button onClick={handelFacbook} className="btn btn-sm"type="submit"><FaFacebook color="red" fontSize="20px"/></Button>
              {/* <Link className="m-2"  type="submit"><AiFillGithub color="black" fontSize="25px"/></Link> */}
           </div>
           <Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;