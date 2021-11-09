import "./navbar.css"
import Cart from "../cartWidget/cartWidget"
import React from 'react';
import Buttons from '../Buttons/Buttons'

function Navbar(){
    return (
        <React.Fragment>
        <nav id="navbar" className="nav_links">
            <div id="menu_principal" className="nav_primary">
                <Buttons id="home" style_but="bot-style" link="/" text="HOME"/>
                <Buttons id="printers" style_but="bot-style" link="/" text="PRINTERS"/>
                <Buttons id="mfp" style_but="bot-style" link="/" text="MFP"/>
                <Buttons id="supplies" style_but="bot-style" link="/" text="SUPPLIES"/>
                <Buttons id="about_us" style_but="bot-style" link="/" text="ABOUT US"/>
            </div>
            <Cart />
        </nav>
        </React.Fragment>
    )
}

export default Navbar