import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className="signup-form">
            <form action="">
        	 <h2>Register Your Account</h2>
        		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
        		  <div className="row">
        			 <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/> Input</div>
        				<div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
        			</div>        	
                </div>
                <div className="form-group">
                	<input className="form-control" name="email" placeholder="Email" required="required"/>
                </div>
        		<div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
                </div>
        		<div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
                </div>        
                <div className="form-group">
        			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the Terms of Use amp; Privacy Policy </label>
        		</div>
        		<div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
            </form>
        	<div className="text-center">Already have an account? <Link className="text-danger" to="/login">Sign in</Link></div>
            <Button className="btn btn-warning mt-3" type="submit"><i className="fab fa-google-plus-g"></i>Register with Google</Button>
          </div>
        </div>
    );
};

export default SignUp;