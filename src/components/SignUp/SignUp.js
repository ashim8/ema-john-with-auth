import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate() 

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match!')
            return;
        }
        if(password.length <6){
            setError('password must be six characters or long!')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="passwors">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-passwors">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <Link className="form-link" to="/login">Login</Link> 
        </p>
      </div>
    </div>
  );
};

export default SignUp;
