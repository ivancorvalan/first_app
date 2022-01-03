import React from 'react'
import { Link } from 'react-router-dom'
import { useItemsCart } from '../../Context/CartContext'
import './CartWidget.css'

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
                <Link className="unlink" to="/cart">
                    <button id="cart" className="button-nav">
                        <img alt="cart" src="https://res.cloudinary.com/icorvalan/image/upload/v1640868826/icon/white_cart.png" width="35px" height="35px"/>
                        <h2 className="qty-style">{qtyOnCart}</h2>
                    </button>
                </Link>
        )
    }else{
        return (
            <>
            </>  
        )
    }
}

export default CartWidget