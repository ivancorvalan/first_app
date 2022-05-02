import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import "./Navbar.css"
import '../extern-CSS/hover.css'
/*import { signOut, getAuth} from 'firebase/auth';
import { useChangeStatusLogin ,useStateLogin } from "../../Context/LoginContext";*/

const linkStyle = "navbar-categories-button hvr-underline-from-center"

function Navbar(){
    const [show , setShow] = useState(true)
    /*const auth = getAuth()
    const changeStatusLogin = useChangeStatusLogin()
    const stateLogin = useStateLogin()

    const logOut = () => {
        signOut(auth)
            .then(() => {
                changeStatusLogin(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const LogInOut = () => {
        if (stateLogin === false){
            return (
                <Link to="/login" className="button-nav login_trans">
                    <button id="user" className="button-nav">
                        <img className="icon_size" alt="user" src="https://res.cloudinary.com/icorvalan/image/upload/v1640876297/icon/login_fst0lz.png" width="30px" height="30px"></img>
                    </button>
                </Link>
            )
        }else{
            return(
                <div className="button-nav login_trans">
                    <button className="button-nav" onClick={logOut}>
                        <img className="icon_size" alt="logOut" src="https://res.cloudinary.com/icorvalan/image/upload/v1640876948/icon/logOut_gnapy1.png"></img>
                    </button>
                </div>
                )
            }
    }
    */
    
    let navbarCatDisplay , menuButton
    if (show === true){navbarCatDisplay = "navbar-categories-hide" ; menuButton = "menu"}
    else{navbarCatDisplay = "navbar-categories" ; menuButton = "menu_open"}

    const Menu = () =>{
        if (show === true){
            return(
            <div className="navbar-menu">
                <button className="navbar-menu-button" onClick={()=>{setShow(false)}}>
                    <span className="material-icons-round">{menuButton}</span>
                </button>
            </div>
            )}
        if (show === false){
            return (
            <div className="navbar-menu">
                <button className="navbar-menu-button" onClick={()=>{setShow(true)}}>
                    <span class="material-icons-round">{menuButton}</span>
                </button>
            </div>
            )
        }
    }

    const NavbarCategory = () =>{
            return(
                <React.Fragment>
                <div className={navbarCatDisplay}>
                    <Link to="/" className={linkStyle}>Inicio</Link>
                    <Link to="/service" className={linkStyle}>Servicios</Link>
                    <Link to="/contact" className={linkStyle}>Asesorate</Link>
                    <Link to="/inbox" className={linkStyle}>Inbox</Link>
                </div>
                </React.Fragment>
            )
        }

    return (
        <React.Fragment>
        <nav className="navbar">
                <div className="navbar-container">
                    <Menu />
                    <p className="navbar-title">AsistLegal</p>
                </div>
                <NavbarCategory/>
        </nav>
        </React.Fragment>
    )
}

export default Navbar