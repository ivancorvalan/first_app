import React from 'react'
import { Link } from 'react-router-dom'
import { useItemsCart } from '../../Context/CartContext'

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
                <Link to="/login" className="button-nav">
                    <button id="user" className="button-nav">
                        <img alt="user" src="https://res.cloudinary.com/icorvalan/image/upload/v1639704635/icon/user_shgjmr.png" width="30px" height="30px"></img>
                    </button>
                </Link>
                <Link to="/cart">
                <button id="cart" className="button-nav">
                    <img alt="cart" src="https://res.cloudinary.com/icorvalan/image/upload/v1639705721/icon/cart_white_g3xwpo.png" width="40px" height="40px" className="efect" />
                    <p className="qty-style">{qtyOnCart}</p>
                </button>
                </Link>
            </div>
        )
    }else{
        return (
            <div id="nav_secondary" className="nav_secondary">
                <Link to="/login" className="button-nav">
                    <button id="user" className="button-nav">
                        <img alt="user" src="https://res.cloudinary.com/icorvalan/image/upload/v1639704635/icon/user_shgjmr.png" width="30px" height="30px"></img>
                    </button>
                </Link>
            </div>   
        )
    }
}

export default CartWidget