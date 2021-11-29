import React , {useState , useEffect} from 'react';
import ItemList from '../ItemList/ItemList'
import {products} from '../Database/DatabaseItems'
import "./itemListContainer.css"
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';

function ItemListContainer(){    
    const [items , setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const catId = useParams()

    useEffect(() => {
        setLoader(true)
        const getProducts = new Promise ((resolve , reject) => {
            setTimeout(() => {
                resolve(products)
            },0)
        })
        getProducts
        .then((resp) => {
            catId
            ? setItems(resp.filter(item => item.type_product===catId.catId))
            : setItems(resp)
        })
        .finally(()=>{
            setLoader(false)
        })    
    },[catId])

    return loader ? (
        <Loading />
    ) : (
        <React.Fragment>
            <ItemList items={items}/>
        </React.Fragment>
    )
}

export default ItemListContainer