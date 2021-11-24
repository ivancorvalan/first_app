import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail(props){
    const item = props.items
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
                        <div className="add-cart-card" >
                            <ItemCount stock={item.stock} initial="1" product={item.model} price={item.price}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail