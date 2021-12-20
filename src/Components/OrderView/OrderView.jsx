import React from "react";
import './OrderView.css'

const OrderView = ({numOrder}) => {
        return(
            <React.Fragment>
                <div className="content">
                    <div className="order-style">
                        <h1>Thanks for buy</h1>
                        <h1>Your number order is</h1>
                    </div>
                    <h1 className="orderNum-Style">{numOrder}</h1>
                </div>
            </React.Fragment>)
}

export default OrderView