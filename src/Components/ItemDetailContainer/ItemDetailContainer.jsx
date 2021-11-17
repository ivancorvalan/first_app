import React , {useState , useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import {products} from '../DatabaseItems/DatabaseItems'
import '../ItemDetail/ItemDetail.css'

function ItemDetailContainer(){
    const [items , setItems] = useState([]);
    useEffect(() => {
    const getItem = new Promise ((resolve , reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
    getItem
    .then((resp) => {
        setItems(resp)
    })},
    [])
    return (
        <React.Fragment>
                {items?.map((item)=>{
                    if (item.id === "mfpm_0001"){
                        return (
                            <div id="ItemDetailContainer" key={item.id} className="content-itemList">
                                    <ItemDetail items={item}/>
                            </div>
                        )
                    }
                    else{
                        return(
                        <div id="ItemDetailContainer">
                        </div>
                        )}
                    })
                }
        </React.Fragment>)}

export default ItemDetailContainer