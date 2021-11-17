import React from "react"

function Item(props){
    return (
        <React.Fragment>
            <div className="product-content">
                    <img className="img-size" src={props.item.url_img} alt={props.item.model}/>
                    <h2 className="product-model">{props.item.model}</h2>
                    <div className="product-text">
                        <h4>Price: {props.item.price} USD</h4>
                    </div>
            </div>
        </React.Fragment>
)}

export default Item