import "./navbar.css"
import Cart from "../CartWidget/CartWidget"
import React from 'react';
import Buttons from '../Buttons/Buttons'
import '../CSS/hover.css'

function Navbar(){
    return (
        <React.Fragment>
        <nav id="navbar" className="nav_links">
            <div id="menu_principal" className="nav_primary">
                <Buttons id="home" style_but="bot-style hvr-underline-from-center" text="HOME"/>
                <Buttons id="printers" style_but="bot-style hvr-underline-from-center" text="PRINTERS"/>
                <Buttons id="mfp" style_but="bot-style hvr-underline-from-center" text="MFP"/>
                <Buttons id="supplies" style_but="bot-style hvr-underline-from-center" text="SUPPLIES"/>
                <Buttons id="about_us" style_but="bot-style hvr-underline-from-center" text="ABOUT US"/>
            </div>
            <Cart />
            
        </nav>
        </React.Fragment>
    )
}

export default Navbar