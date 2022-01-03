import React from 'react';
import "./header.css"
import Logo from './img/logo.png'

function Header(){
    return (
        <React.Fragment>
            <div className='barHeader'></div>
                <div id="header" className="header-style">
                    <img src={Logo} className="logo-style" alt=""></img>
                    <h1 className="text-style">Printers Market.</h1>
                </div>
        </React.Fragment>
    )
}

export default Header