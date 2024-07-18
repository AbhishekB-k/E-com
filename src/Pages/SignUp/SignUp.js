import React, { useEffect, useState } from 'react';
import "./SignUp.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Action';

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpData,setSignUpData] = useState({});
    const dispatch = useDispatch();

    const handleSignUp = ()=>{
        console.log(signUpData);
        dispatch(register(signUpData));
    };
    
    useEffect(()=>{
    },[signUpData]);
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Welcome To ECOM</h1>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" onChange={(e)=>{
                        setSignUpData({...signUpData,name:e.target.value})
                    }} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" onChange={(e)=>{
                        setSignUpData({...signUpData,email:e.target.value})
                    }}/>
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="number" onChange={(e)=>{
                        setSignUpData({...signUpData,number:e.target.value})
                    }}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" onChange={(e)=>{
                        setSignUpData({...signUpData,password:e.target.value})
                    }}/>
                </div>
                <div className="form-actions">
                    <p>Already a user? <span className="signin-link" onClick={()=>navigate("/SignIn")}>Sign In</span></p>
                    <button onClick={()=>handleSignUp()}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
