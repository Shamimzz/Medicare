import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Login.css';

// swal alert.
import swal from 'sweetalert';

// Reacts Icons
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';


const Login = () => {

  // Gets data from returen firebase by UseAuth().......
  const {handlePasswordSet, email, password, auth, handleEmailSet, handeleGoogleAuth, handelFacbook} = useAuth();

  // used for privateRouter locations.
  const location = useLocation();  
  const history = useHistory();

  // Shop korte chaile taree direct kore ene login page a anlm || r jodi direct login kore tahle Home a pathay dibo.
  const redirect_uri = location.state?.from || '/home';
  
  //signup with google.
  const handelGoogle = (e) => {
    e.preventDefault();
    handeleGoogleAuth()
    .then((result) => {
       history.push(redirect_uri) 
    })
  }


   // Sign In with email And Password.
   const SignInWithEmail = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      history.push(redirect_uri);
    })
    .catch((error)=>{
      //useing sweetalert.
      swal("Oops!", "Maybe You Enter wrong email & password!", "error");
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
               <h6 className="text-muted">Sign In with</h6>
               <Button onClick={handelGoogle} className="btn btn-sm btn-darger" type="submit"><FaGoogle color="red" fontSize="30px"/>oogle</Button>      
               {/* <Button onClick={handelFacbook} className="btn btn-sm" type="submit"><FaFacebook color="green" fontSize="20px"/></Button> */}
             </div>
           <Button to="/signup" as={Link} className="btn btn-info text-decoration-none text-light" type="submit">Register Account</Button>

       </div>
     </div>
    );
};

export default Login;