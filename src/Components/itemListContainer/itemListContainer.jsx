import React from 'react';
import "./itemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer(props){
    const product = "Product"
    return (
        <React.Fragment>
            <div className="container-img">
                <h1 className="tittle-style">{props.tittle}</h1>
                <p className="card">{props.text}</p>
                <div className="content-count-button">
                    <div className="count-style">
                        <h2 className="product-style">{product}</h2>
                    </div>
                    <ItemCount stock="10" initial="1" product={product}/>
                </div>
            </div>
            
        </React.Fragment>
    )
}


export default ItemListContainer