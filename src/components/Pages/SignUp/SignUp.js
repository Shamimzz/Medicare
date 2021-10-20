import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {

    const {handeleGoogleAuth, SignUpWithEmail, SignInWithEmail, handlePasswordSet, handleEmailSet, handleNameSet} = useAuth();

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
        <div>
            <div className="signup-form">
            <form onSubmit={SignUpWithEmail}>
        	 <h2>Register Your Account</h2>
        		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
        		  <div className="row">
        			 <div className="col"><input type="text" className="form-control" name="first_name"  onBlur={handleNameSet} placeholder="First Name" required="required"/></div>
        			</div>        	
                </div>
                <div className="form-group">
                	<input className="form-control"  onBlur={handleEmailSet} name="email" placeholder="Email" required="required"/>
                </div>
        		<div className="form-group">
                    <input type="password"  onBlur={handlePasswordSet} className="form-control" name="password" placeholder="Password" required="required"/>
                </div>    
                <div className="form-group">
        			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the Terms of Use amp; Privacy Policy </label>
        		</div>
        		<div className="form-group">
                    <Button type="submit" className="btn btn-info  btn-block">Register Now</Button>
                </div>
            </form>
        	<div className="text-center">Already have an account? <Link className="text-danger" to="/login">Sign in</Link></div>
            <Button onClick={handelGoogle} className="btn btn-primary mt-3" type="submit">Register with Google</Button>
          </div>
        </div>
    );
};

export default SignUp;