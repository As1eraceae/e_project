import React from "react";
import './CSS/LoginSignup.css'
const LoginSinup=()=>{
    return(
        <div className="signup">
            <div className="signup_container">
                <h1>Sign Up</h1>
                <div className="signup_fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="login">Already have an account? <span>Login</span></p>
                <div className="agree">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSinup;