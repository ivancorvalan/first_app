import React , {useState , useEffect} from 'react';
import ItemList from '../ItemList/ItemList'
/*import {products} from '../Database/DatabaseItems'*/
import "./itemListContainer.css"
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';
import {getFirestore , collection  , getDocs} from 'firebase/firestore'

function ItemListContainer(){    
    const [items , setItems] = useState([[]]);
    const [loader, setLoader] = useState(true);
    const catId = useParams()

    useEffect(() => {
        setLoader(true)
        const db = getFirestore()
        const ref = collection(db , "items")
        getDocs(ref)
            .then((snapShot) => {
                catId
                ? setItems(snapShot.docs.filter(item => item.data().type_product === catId.catId))
    
                : setItems(snapShot.docs)
                }
            )
            .finally(()=>{
                setLoader(false)}) 
    },[catId])

    return loader ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div>
            <ItemList items={items}/>
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer