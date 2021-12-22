import React, { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'

const Login = () => {
    const [ itsLogin , setItsLogin] = useState(true)
    if (itsLogin === true){
    return (
        <React.Fragment>
            <div className="login-box">
                <h1 className="tittle-login">Login</h1>
                <div className="content-login">
                    <label>E-mail</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <input type="submit"placeholder="login" value="Login" className="submit-button-login"/>
                    <Link to="/register">
                        <button className="link-button-register">
                            <p>Register</p>
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )}
    else{
        return(
            <React.Fragment>
                <h3>LOGIN</h3>
            </React.Fragment>
        )
    }
    
}

export default Login