import React, { useState } from "react"


const Login = () => {
    const [ itsLogin , setItsLogin] = useState(true)
    if (itsLogin === false){
    return (
        <React.Fragment>
            <div className="content">
                <label>
                    E-mail
                    <input type="email" />
                </label>
                <label>
                    Password
                    <input type="password"/>
                </label>
                <input type="submit" value="Login"/>
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