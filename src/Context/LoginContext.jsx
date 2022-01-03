import React, {useContext, useState } from "react";

const Context = React.createContext()

export function LoginContext ( {children} ) {
    const [login , setLogin] = useState(false)
    const [formUser , setFormUser] = useState({})

    const formUserData = (form) => {   
        return setFormUser(form)
    }

    return (
        <Context.Provider value={{ formUser ,  login , useStateLogin , setLogin , useChangeStatusLogin , useFormUserData , formUserData}}>
            {children}
        </Context.Provider>
    )
}

export function useChangeStatusLogin (){
    return useContext(Context).setLogin
}

export function useFormUserData (){
    return useContext(Context).formUserData
}

export function useStateLogin () {
    return useContext(Context).login
}

export function useFormUser () {
    return useContext(Context).formUser
}

export default LoginContext