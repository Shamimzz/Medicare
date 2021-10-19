import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Login.css';

// Reacts Icons
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";


import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {

  const {handeleGoogleAuth, handelFacbook, SignInWithEmail, setPassword, setEmail} = useAuth();

  // used for privateRouter locations.
  const location = useLocation();  
  const history = useHistory();

  // shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo.
  const redirect_uri = location.state?.from || '/home';

  const handelGoogle = (e) => {
    e.preventDefault();
    handeleGoogleAuth()
    .then((result) => {
       history.push(redirect_uri) 
    })
  }



    return (
     <div className="m-auto">

      <div className="signup-form">
            <div>
            <h2>Please Log In First</h2>
              <div className="form-group">       	
                </div>
                <div className="form-group">
                	<input className="form-control"
                    onChange={(ev)=>setEmail(ev.target.value)}
                  type="email" placeholder="Email" required="required"/>
                </div>
        	    	<div className="form-group">
                    <input type="password" className="form-control"
                     onChange={(ev)=>setPassword(ev.target.value)}
                    placeholder="Password" required="required"/>
                </div> 
                <div>
                </div>     
        	    	<div className="form-group">
                  <Button onClick={SignInWithEmail} type="submit" className="btn btn-info  btn-block">Log In</Button>
                </div>
            </div>
           <div className="mb-3" controlId="formBasicCheckbox">
               <h6 className="text-muted">Sign In Others.</h6>
               <Button onClick={handelGoogle} className="btn btn-sm"type="submit"><FaGoogle color="red" fontSize="20px"/></Button>
              
               <Button onClick={handelFacbook} className="btn btn-sm"type="submit"><FaFacebook color="green" fontSize="20px"/></Button>
             </div>
           <Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;