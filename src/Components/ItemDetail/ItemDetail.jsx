import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useAddCart} from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({item}){
    const add = useAddCart()
    const [goToCart , setGoToCart] = useState(true)
    const onAdd = (quantity) => {
        add({...item , quantity:quantity})
        setGoToCart(false)
        }

    function color(item_color){
            if (item_color === "Monochrome Laser"){
                return 'https://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/mono_uuln0w.png'
            }else{
                return 'http://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/cymk_hdeerg.png'
            }
        }

    const {
        model,
        url_img,
        detail,
        type_model,
        type_function,
        recommended,
        print_speed,
        stock
            } = item
    return (
        <React.Fragment>
            <div className="card-product">
                <h1 className="tittle-card">{model}</h1>
                <div className="card-detail">
                    <div className="card-imgs">
                        <img src={url_img} alt={url_img} />
                        <img className="img-color-detail" src={color(type_model)} alt={type_model} />
                    </div>
                    <div className="text-of-content">
                        <h1 className="tittle-card">Description</h1>
                        <h1 className="text-of-description">{detail}</h1>
                        <h1 className="tittle-card">Features</h1>
                        <ul className="list-style">
                            <li className="text-of-list">{type_model} {type_function}</li>
                            <li className="text-of-list">{recommended}</li>
                            <li className="text-of-list">{print_speed}</li>
                        </ul>
                        {
                        goToCart ? (
                        <div className="add-cart-card" >
                            <ItemCount onAdd={onAdd} stock={stock} initial={1}/>
                        </div>)
                        :
                        (
                        <div className="add-cart-card">
                            <Link to="/cart">
                                <button className="button-text">Go to Cart!</button>
                            </Link>
                        </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail