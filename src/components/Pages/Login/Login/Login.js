import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';

// Reacts Icons
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import useAuth from '../../../Hooks/useAuth';

import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const Login = () => {

  const {handeleGoogleAuth, handelFacbook, SignInWithEmail } = useAuth();
    
    // used for privateRouter locations.
    const location = useLocation();  
    const history = useHistory();

    // shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo. '/shop' ...
    const redirect_uri = location.state?.from || '/services';

    const handelGoogle = () => {
      handeleGoogleAuth()
      .then((result) => {
         history.push(redirect_uri) 
      })
    }

    return (
     <div className="m-auto">

      <div className="signup-form">
            <form onSubmit={SignInWithEmail}>
            <h2>Please Log In First</h2>
              <div className="form-group">       	
                </div>
                <div className="form-group">
                	<input className="form-control"
                   type="email"
                   autoFocus
                   onChange={(e)=>setEmail(e.target.value)}
                   placeholder="Email" required="required"/>
                </div>
        	    	<div className="form-group">
                    <input type="password" className="form-control"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password" required="required"/>
                </div> 
                <div>
                </div>     
        	    	<div className="form-group">
                  <Button type="submit" className="btn btn-info  btn-block">Log In</Button>
                </div>
            </form>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <h6 className="text-muted">Sign In Others.</h6>
              <Link onClick={handelGoogle}  className="m-2"type="submit"><FaGoogle color="red" fontSize="25px"/></Link>
              <Link onClick={handelFacbook} className="m-2"  type="submit"><FaFacebook color="blue" fontSize="25px"/></Link>
              <Link className="m-2"  type="submit"><AiFillGithub color="black" fontSize="25px"/></Link>
           </Form.Group><Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;