import "./navbar.css"
import Cart from '../CartWidget/CartWidget'
import React from 'react';
import '../extern-CSS/hover.css'
import {Link} from 'react-router-dom'
import { signOut, getAuth} from 'firebase/auth';
import { useChangeStatusLogin ,useStateLogin } from "../../Context/LoginContext";

const linkStyle = "bot-style hvr-underline-from-center"

function Navbar(){
    const auth = getAuth()
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
                        <img alt="user" src="https://res.cloudinary.com/icorvalan/image/upload/v1640876297/icon/login_fst0lz.png" width="30px" height="30px"></img>
                    </button>
                </Link>
            )
        }else{
            return(
                <div className="button-nav login_trans">
                    <button className="button-nav" onClick={logOut}>
                        <img alt="logOut" src="https://res.cloudinary.com/icorvalan/image/upload/v1640876948/icon/logOut_gnapy1.png"  width="30px" height="30px"></img>
                    </button>
                </div>
                )
            }
    }
    return (
        <React.Fragment>
        <nav id="navbar" className="nav_links">
            <div className="nav_category">
                <Link to="/" className={linkStyle}>Home</Link>
                <Link to="/category/printer" className={linkStyle}>Printers</Link>
                <Link to="/category/mfp" className={linkStyle}>MFP</Link>
            </div>
            <div className="nav_cart">
                <Cart />
            </div>
            <div className="nav_login">
                <Link to="/register" className="button-nav login_trans">
                    <button id="register" className="button-nav">
                        <img alt="register" src="https://res.cloudinary.com/icorvalan/image/upload/v1640876297/icon/register_ag3nfg.png" width="30px" height="30px"></img>
                    </button>
                </Link>
                <LogInOut />
            </div>
        </nav>
        </React.Fragment>
    )
}

export default Navbar