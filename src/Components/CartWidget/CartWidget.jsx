import React from 'react'
import { Link } from 'react-router-dom'
import { useItemsCart } from '../../Context/CartContext'
import Cart from "./img/cart_white.png"

function CartWidget(){
    const itemsCart = useItemsCart()

    const sumQty = () => {
        let qty = 0
        itemsCart.forEach(element => {
            qty = qty + element.quantity})
        return qty
    }

    const qtyOnCart = sumQty()
    
    if (qtyOnCart > 0){
        return (
            <div id="nav_secondary" className="nav_secondary">
                <Link to="/cart">
                <button id="cart" className="button-nav">
                    <img alt="img" src= {Cart} width="40px" height="40px" className="efect" />
                    <p className="qty-style">{qtyOnCart}</p>
                </button>
                </Link>
            </div>
        )
    }else{
        return (
            <div id="nav_secondary" className="nav_secondary">
            </div>   
        )
    }
}

export default CartWidget