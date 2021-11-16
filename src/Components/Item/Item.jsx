import React from "react"

function Item(props){
    console.log(props)
    return (
        <React.Fragment>
            <div className="product-content">
                    <img className="img-size" src={props.item.url_img} alt={props.item.model}/>
                    <h2 className="product-model">{props.item.model}</h2>
                    <div className="product-text">
                        <h4>Type: {props.item.type_model}</h4>
                        <h4>Mark: {props.item.mark}</h4>
                        <h4>Funtion: {props.item.type_function}</h4>
                        <h4>Price: {props.item.price} USD</h4>
                    </div>
            </div>
        </React.Fragment>
)}

export default Item