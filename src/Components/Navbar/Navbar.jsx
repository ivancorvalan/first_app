import "./navbar.css"
import Cart from '../CartWidget/CartWidget'
import React from 'react';
import '../extern-CSS/hover.css'
import {Link} from 'react-router-dom'

const linkStyle = "bot-style hvr-underline-from-center"

function Navbar(){
    return (
        <React.Fragment>
        <nav id="navbar" className="nav_links">
            <div className="nav_primary">
                <Link to="/" className={linkStyle}>Home</Link>
                <Link to="/category/printer" className={linkStyle}>Printers</Link>
                <Link to="/category/mfp" className={linkStyle}>MFP</Link>
                <Link to="/about_us" className={linkStyle}>About Us</Link>
            </div>
            <Cart />
        </nav>
        </React.Fragment>
    )
}

export default Navbar