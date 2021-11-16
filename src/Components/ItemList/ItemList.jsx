import React from "react";
import './ItemList.css'
import Item from '../Item/Item'
import ItemCount from "../ItemCount/ItemCount";

function ItemList(props){
    console.log(props.items)
    return(
        <React.Fragment>
            <div className="container-img">
            {/*<h1 className="tittle-style">{props.tittle}</h1>
            <p className="card">{props.text}</p>*/}
            {
            props.items?.map((item)=>{
                return(
                <div key={item.id} className="content-count-button">
                    <Item item={item} />
                    <ItemCount stock={item.stock} initial="1" product={item.model} price={item.price}/>
                </div>)})
            }
            </div>
        </React.Fragment>
        )
}

export default ItemList

