import React from "react"
import './Register.css'

const Register = () => {
    return (
        <React.Fragment>
            <div className="register-box">
                <h1 className="tittle-register">Register</h1>
                <form className="content-register">
                    <label>Name</label>
                    <input type="text" className="input-button-register"/>
                    <label>Surname</label>
                    <input type="text" className="input-button-register"/>
                    <label>E-mail</label>
                    <input type="email" className="input-button-register"/>
                    <label>Phone</label>
                    <input type="number" className="input-button-register"/>
                    <label>Password</label>
                    <input type="password" className="input-button-register"/>
                    <label>Confirm password</label>
                    <input type="password" className="input-button-register"/>
                    <input type="submit" value="Register" className="submit-button-register"/>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Register