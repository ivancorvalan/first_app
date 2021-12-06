import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useAddCart} from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


function ItemDetail({item}){
    const add = useAddCart()
    const [goToCart , setGoToCart] = useState(true)
    const onAdd = (quantity) => {
        add({...item , quantity:quantity})
        setGoToCart(false)
        }
    return (
        <React.Fragment>
            <div className="card-product">
                <h1 className="tittle-card">{item.model}</h1>
                <div className="card-detail">
                    <img src={item.url_img} alt={item.url_img} />
                    <div className="text-of-content">
                        <h1 className="tittle-card">Description</h1>
                        <h1 className="text-of-description">{item.detail}</h1>
                        <h1 className="tittle-card">Features</h1>
                        <ul className="list-style">
                            <li className="text-of-list">{item.type_model} {item.type_function}</li>
                            <li className="text-of-list">{item.recommended}</li>
                            <li className="text-of-list">{item.print_speed}</li>
                        </ul>
                        {
                        goToCart ? (
                        <div className="add-cart-card" >
                            <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/>
                        </div>)
                        :
                        (
                        <div className="add-cart-card">
                            <Link to="/cart">
                                <button className="button-text">Buy now!</button>
                            </Link>
                        </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail