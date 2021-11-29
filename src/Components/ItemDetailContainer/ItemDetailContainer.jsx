import React , {useState , useEffect} from "react";
import { useParams } from "react-router";
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from "../Loading/Loading";
import {products} from '../Database/DatabaseItems'
import '../ItemDetail/ItemDetail.css'

function ItemDetailContainer(){
    const [items , setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const itemId = useParams()
    useEffect(() => {
        setLoader(true)
        const getItem = new Promise ((resolve , reject) => {
            setTimeout(() => {
                resolve(products)
            },0)
        })
        getItem
        .then((resp) => {
            itemId
            ? setItems(resp.filter(id => id.id===itemId.itemId))
            : setItems(resp)
        })
        .finally(()=>{
            setLoader(false)
        })
    },[itemId])

    return loader ? (
        <Loading />
        ) : (
        <React.Fragment>
                {items?.map((item)=>{    
                    return (
                            <div id="ItemDetailContainer" key={item.id} className="content-itemList">
                                <ItemDetail item={item}/>
                            </div>
                        )
                })
                }
        </React.Fragment>)}

export default ItemDetailContainer