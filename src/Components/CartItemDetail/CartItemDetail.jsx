import React from "react";
import './CartItemDetail.css'

function CartItemDetail({item}){
        const {id,
        model,
        mark,
        quantity,
        type_model,
        type_function,
        price,
        url_img
        } = item
        return(
            <React.Fragment>
                <div className="product-card" key={id}>
                    <div className="box-img">
                        <img className="img-cart" src={url_img} alt={model}></img>
                    </div>
                    <div className="text-content">
                        <div>
                            <h2 className="model-style">{mark} {model}</h2>
                        </div>
                        <h4>{type_model} {type_function}</h4>
                        <h5>Quantity  {quantity}</h5>
                        <h5>Price by unit $ {price}</h5>
                        <h5>Total Price $ {quantity * price}</h5>
                    </div>
                </div>
                </React.Fragment>
        )
    }

export default CartItemDetail