import "./navbar.css"
import Login from "./img/login.PNG"
import Cart from "./img/cart.PNG"

function Navbar(){
    return (
        <>
        <nav id="navbar" className="nav_links">
            <div id="menu_principal" className="nav_primary">
                <a id="main" className="bot-style" href="/">Main</a>
                <a id="printers" className="bot-style" href="/">Printers</a>
                <a id="mfp" className="bot-style" href="/">MFP</a>
                <a id="supply" className="bot-style" href="/">Supply</a>
            </div>
            <div id="menu_secundario" className="nav_secondary">
                <button id="cart" className="button-nav">
                    <img src= {Cart} width="30px" height="25px" />
                </button>
                <button id="login" className="button-nav">
                    <img src= {Login} width="30px" height="25px"/>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar