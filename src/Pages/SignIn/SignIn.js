import { useNavigate } from "react-router-dom";
import "./SignIn"
import { useEffect, useState } from "react";

const SignIn = ()=>{
    const navigate = useNavigate();
    const [signInData,setSignInData] = useState({});

    const handleSignIn = ()=>{

    };

    useEffect(()=>
        {},[signInData])
    return(
        <div className="signup-container">
            <div className="signup-form">
                <h1>Welcome To ECOM</h1>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" />
                </div>
                <div className="form-actions">
                    <p>Not A User? <span className="signin-link" onClick={()=>navigate("/SignUp")}>Sign Up</span></p>
                    <button onClick={()=>handleSignIn()}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;