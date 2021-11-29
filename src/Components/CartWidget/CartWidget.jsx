import React from 'react'
import { Link } from 'react-router-dom'
import Cart from "./img/cart_white.png"

function CartWidget(){
    return (
        <div id="nav_secondary" className="nav_secondary">
            <Link to="/cart">
            <button id="cart" className="button-nav">
                <img alt="img" src= {Cart} width="40px" height="40px" />
            </button>
            </Link>
        </div>
    )
}

export default CartWidget