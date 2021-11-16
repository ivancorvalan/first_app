import React , {useState , useEffect} from 'react';
import ItemList from '../ItemList/ItemList'
import {products} from '../DatabaseItems/DatabaseItems'
import "./itemListContainer.css"

function ItemListContainer(props){
    const [items , setItems] = useState([]);
    useEffect(() => {
    const getProducts = new Promise ((resolve , reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
    getProducts
    .then((resp) => {
        setItems(resp)
    })},
    [])
    return (
        <React.Fragment>
            <ItemList items={items}/>
        </React.Fragment>
    )
}

export default ItemListContainer