import React , {useState} from "react";
import './ItemCount.css'

function ItemCount(props) {
    const [number , setNumber] = useState(Number(props.initial))
    const stock = Number(props.stock);
    return (
        <React.Fragment>
            <div className="box">
                <div className="count-style">
                    <button className="symbol-style" onClick={()=> {
                        if (number >=2 ){
                            setNumber(number - 1)
                        }
                    }}>-</button>
                    <h4 className="num-style">{number}</h4>
                    
                    <button className="symbol-style" onClick={()=> {
                        if (number !== stock){
                            setNumber(number + 1)  
                        }
                    }}>+</button>
                </div>
                <div className="button-style-add">
                    <button className="button-text">Add to cart</button>
                    <button className="button-text">Buy now</button>
                </div>
            </div> 
        </React.Fragment>
    )
    
}

export default ItemCount