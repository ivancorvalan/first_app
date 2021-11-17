import React from "react";
import './ItemDetail.css'

function ItemDetail(props){
    const item = props.items
    return (
        <React.Fragment>
            <div className="card">
                <div className="text-of-content">
                    <h1 className="tittle-card">Product Details</h1>
                    <ul className="list-style">
                        <li className="text-of-list">Model {item.model}</li>
                        <li className="text-of-list">{item.type_model} {item.type_function}</li>
                        <li className="text-of-list">{item.detail}</li>
                        <li className="text-of-list">{item.recommended}</li>
                        <li>{item.print_speed}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail