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
import { signInWithEmailAndPassword } from '@firebase/auth';


const Login = () => {

  const {handlePasswordSet, email, password, auth, handleEmailSet, handeleGoogleAuth, handelFacbook} = useAuth();

  // used for privateRouter locations.
  const location = useLocation();  
  const history = useHistory();

  // Shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo.
  const redirect_uri = location.state?.from || '/home';

  const handelGoogle = (e) => {
    e.preventDefault();
    handeleGoogleAuth()
    .then((result) => {
       history.push(redirect_uri) 
    })
  }


   // Sign In with email
   const SignInWithEmail = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      history.push(redirect_uri);
    })
    .catch((error)=>{
      // alert("No user exist| ",error.code);
      console.log(error.code);
    })
    // console.log('clicked')      
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
                    onBlur={handleEmailSet}
                  type="email" placeholder="Email" required="required"/>
                </div>
        	    	<div className="form-group">
                    <input type="password" className="form-control"
                     onBlur={handlePasswordSet}
                    placeholder="Password" required="required"/>
                </div> 
                <div>
                </div>     
        	    	<div className="form-group">
                  <Button type="submit" className="btn btn-info  btn-block">Log In</Button>
                </div>
            </form>
           <div className="mb-3" controlId="formBasicCheckbox">
               <h6 className="text-muted">Sign In Others.</h6>
               <Button onClick={handelGoogle} className="btn btn-sm" type="submit"><FaGoogle color="red" fontSize="20px"/></Button>      
              <Button onClick={handelFacbook} as={Link} to="home" className="btn btn-sm" type="submit"><FaFacebook color="green" fontSize="20px"/></Button>
             </div>
           <Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;