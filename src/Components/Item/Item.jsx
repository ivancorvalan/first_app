import React from "react"
import { Link } from "react-router-dom"
import './Item.css'

function color(item_color){
    if (item_color === "Monochrome Laser"){
        return 'https://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/mono_uuln0w.png'
    }else{
        return 'http://res.cloudinary.com/icorvalan/image/upload/v1637726461/color/cymk_hdeerg.png'
    }
}

function Item({item}){
    return (
        <React.Fragment>
            <Link to={'/item/'+ item.id} className="link-item">            
                <div className="product-content">
                        <img className="img-size" src={item.url_img} alt={item.model}/>
                        <img className="img-color" src={color(item.type_model)} alt="type"></img>
                        <h2 className="product-model">{item.mark} {item.model}</h2>
                        <div className="product-text">
                            <h4>Price: {item.price} USD</h4>
                        </div>
                </div>
            </Link>
        </React.Fragment>
)}

export default Item