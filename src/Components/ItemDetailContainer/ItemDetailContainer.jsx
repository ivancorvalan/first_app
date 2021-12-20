import React , {useState , useEffect} from "react";
import { useParams } from "react-router";
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from "../Loading/Loading";
/*import {products} from '../Database/DatabaseItems'*/
import '../ItemDetail/ItemDetail.css'
import {getFirestore , collection  , getDocs} from 'firebase/firestore'


function ItemDetailContainer(){
    const [items , setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const itemId = useParams()

    useEffect(() => {
        setLoader(true)
        const db = getFirestore()
        const ref = collection(db , "products")
        getDocs(ref)
            .then((snapShot) => {
                itemId
                ? setItems(snapShot.docs.filter(item => item.data().id === itemId.itemId))
    
                : setItems(snapShot.docs)
                }
            )
            .finally(()=>{
                setLoader(false)}) 
    },[itemId])

    return loader ? (
        <Loading />
        ) : (
        <React.Fragment>
                {items?.map((item)=>{    
                    return (
                            <div id="ItemDetailContainer" key={item.data().id} className="content-itemList">
                                    <ItemDetail item={item.data()}/>
                            </div>
                        )
                })
                }
        </React.Fragment>)}

export default ItemDetailContainer