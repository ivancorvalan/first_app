import React from "react"
import { Link } from "react-router-dom"
import './Item.css'

function color(item_color){
    if (item_color == "Color Laser"){
        return 'https://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/mono_uuln0w.png'
    }else{
        return 'http://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/cymk_hdeerg.png'
    }
}

function Item(props){
    return (
        <React.Fragment>
            <Link to={'/item/'+ props.item.id} className="link-item">            
                <div className="product-content">
                        <img className="img-size" src={props.item.url_img} alt={props.item.model}/>
                        <img className="img-color" src={color(props.item.type_model)} alt="type"></img>
                        <h2 className="product-model">{props.item.mark} {props.item.model}</h2>
                        <div className="product-text">
                            <h4>Price: {props.item.price} USD</h4>
                        </div>
                </div>
            </Link>
        </React.Fragment>
)}

export default Item