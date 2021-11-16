import React , {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {products} from '../Item/Item'
import "./itemListContainer.css"

function ItemListContainer(props){
    const [items , setItems] = useState([]);
    const getProducts = new Promise ((resolve , reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
    getProducts
    .then((resp) => {
        setItems(resp)
    })
    .catch((error) => {
        console.log("error")
    })
    return (
        <React.Fragment>
            <div className="container-img">
                {/*<h1 className="tittle-style">{props.tittle}</h1>
                <p className="card">{props.text}</p>*/}
                {
                items?.map((item)=>{
                    return(
                    <div key={item.id} className="content-count-button">
                        <ItemList item={item}/>
                        <ItemCount stock={item.stock} initial="1" product={item.model} price={item.price}/>
                    </div>)})
                }
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer