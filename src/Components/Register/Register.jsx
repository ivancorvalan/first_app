import React, { useState } from "react"
import { createUserWithEmailAndPassword , getAuth, updateProfile } from 'firebase/auth';
import './Register.css'
import { useFormUserData } from "../../Context/LoginContext";
import Login from "../Login/Login";

const Register = () => {
    const [createUser , setCreateUser] = useState({})
    const [msg, setMsg] = useState("")
    const [flagRegister , setFlagRegister] = useState(false)
    const sendFormContext = useFormUserData()
    const auth = getAuth()

    const onChange = (evt) => {
        evt.preventDefault()
        setCreateUser({
            ...createUser,
            [evt.target.name] : evt.target.value
        })}

    const onSubmit = (evt) => {
        evt.preventDefault()
        if ((  createUser.email !== ""
            && createUser.password !== ""
            && createUser.name !== ""
            && createUser.phoneNumber !== ""
            && createUser.password === createUser.conf_password)) {
                createUserWithEmailAndPassword(auth ,
                                                createUser?.email,
                                                createUser?.password,
                                                )
                .then(()=>{setMsg("Registered")
                            updateProfile(auth.currentUser , {displayName : createUser?.name})
                            sendFormContext(createUser)
                            setFlagRegister(true)
                            })
                .catch(()=>{setMsg("Don't registered")
                            })
                        }
        else{
            setMsg("One or more inputs aren't correct or empty")
        }
    }

    if (flagRegister === false){
        return(
        <React.Fragment>
            <div className="register-box">
                <h1 className="tittle-register">Register</h1>
                <form className="content-register">
                    <input type="text" placeholder="Name" name="name" className="input-button-register" onChange={onChange} required/>
                    <input type="email" placeholder="E-mail" name="email" className="input-button-register" onChange={onChange} required/>
                    <input type="number" placeholder="Phone Number" name="phoneNumber" className="input-button-register" onChange={onChange} required/>
                    <input type="password" placeholder="Password" name="password" className="input-button-register" onChange={onChange} required/>
                    <input type="password" placeholder="Confirm Password" name="conf_password" className="input-button-register" onChange={onChange} required/>
                    <p className="msg-show">{msg}</p>
                    <button onClick={onSubmit} type="submit" className="submit-button-register">Register</button>
                </form>
            </div>
        </React.Fragment>
    )}
    else{
        return(
            <Login />
        )
    }
}

export default Register