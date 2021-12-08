import React from "react";
import { Link } from "react-router-dom";
import {useDeleteItem, useItemsCart} from '../../Context/CartContext'
import CartItemDetail from "../CartItemDetail/CartItemDetail";
import './Cart.css'

const Cart = () => {
    const deleteItem = useDeleteItem()
    const itemsCart = useItemsCart()
    const deleteItemCart = (item) => {
        deleteItem(item)
    }

    const totalPay = () => {
        let total = 0
        itemsCart.forEach(item => {
            total = total + (item.quantity * item.price)
        })
        return total
    }

    const qtyItems = () => {
        let qty = 0
        itemsCart.forEach(item => {
            qty = qty + item.quantity
        })
        return qty
    }

    if (qtyItems() !== 0){
        return (
        <React.Fragment>
            <div className="content-cart">
                <div className="tittle">
                    <h1 className="tittle-cart">Your Cart</h1>
                </div>
                <div className="card-cart">
                {itemsCart?.map((item)=>{
                    const item_link = "/item/"+item.id
                    return(
                        <React.Fragment>
                            <div className="item-style">
                                <CartItemDetail item={item}/>
                                <div className="bar-buttons">
                                    <button className="button-text-cart" onClick={()=>{deleteItemCart(item)}} >Delete</button>
                                    <Link to={item_link}>
                                        <button className="button-text-cart">Come back to product</button>
                                    </Link>
                                </div>
                            </div>
                        </React.Fragment>
                            )
                        }
                    )
                }
            </div>
            <div className="total-text">
                <h3 className="total-pay">Total $ {totalPay()}</h3>
            </div>
                <button className="button-text-cart button-maxim">Buy Now!</button>
            </div>
        </React.Fragment>
    )}
    else{
        return (
            <React.Fragment>
                <div className="content-cart">
                    <div className="content-empty">
                        <h2 className="tittle-empty">Your cart is empty</h2>
                        <Link to="/">
                            <button className="button-text-cart">Home</button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    }

export default Cart
