import React, { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword , getAuth} from 'firebase/auth';
import './Login.css'
import { useChangeStatusLogin , useFormUserData } from "../../Context/LoginContext";

const Login = () => {
    const [loginUser , setLoginUser] = useState({})
    const [msg , setMsg] = useState("")
    const auth = getAuth()
    const changeStatusLogin = useChangeStatusLogin()
    const sendFormContext = useFormUserData()

    const onChange = (evt) => {
        evt.preventDefault()
        setLoginUser({
            ...loginUser,
            [evt.target.name] : evt.target.value
            }
        )
    }

    const signUpUser = () => {
        if (loginUser.email !== "" && loginUser.password !== ""){
        signInWithEmailAndPassword(auth,
                                    loginUser?.email,
                                    loginUser?.password)
            .then((user) => {setMsg("Login successful")
                            changeStatusLogin(true)
                            sendFormContext(user.user.providerData)
            })
            .catch(() => {setMsg("Invalid credentials")})
        }
        else{
            setMsg("Please complete all inputs")
        } 
}

    return (
        <React.Fragment>
            <div className="login-box">
                <h1 className="tittle-login">Login</h1>
                <div className="content-login">
                    <div className="icon-input">
                        <img className="img-icon-style" alt="user" src="https://res.cloudinary.com/icorvalan/image/upload/v1640887000/icon/login-form_rwoisf.png"></img>
                        <input type="email" name="email" placeholder="e-mail" onChange={onChange}required/>
                    </div>
                    <div className="icon-input">
                        <img className="img-icon-style" alt="password" src="https://res.cloudinary.com/icorvalan/image/upload/v1640887000/icon/pass_form_a3j1rk.png"></img>
                        <input type="password" placeholder="password" name="password" onChange={onChange} required/>
                    </div>
                    <div className="icon-input">
                        <p>{msg}</p>
                    </div>
                </div>
                <div className="container-buttons-login">
                    <button id="login" type="submit" onClick={signUpUser} className="submit-button-login">Login</button>
                    <Link to="/register">
                        <button className="link-button-register">Register</button>
                    </Link>
                </div>
            </div>
    </React.Fragment>)}
    
export default Login