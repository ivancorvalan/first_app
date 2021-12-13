import React from "react";
import './ItemList.css'
import Item from '../Item/Item'

function ItemList({items}){
    return(
        <React.Fragment>
            <div id="ItemListContainer" className="container-img">
            {
            items?.map((item)=>{
                return(
                <div key={item.data().id} className="content-count-button">
                    <Item item={item.data()} />
                </div>
            )})
            }
            </div>
        </React.Fragment>
        )
}

export default ItemList

