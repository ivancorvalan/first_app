import React , {useState} from "react";
import './ItemCount.css'

function ItemCount(props) {
    const [number , setNumber] = useState(Number(props.initial))
    console.log()
    const stock = Number(props.stock);
    return (
        <React.Fragment>
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
                    <button onClick={function onAdd(){
                        console.log("Product " + props.product + "\nCantidad " + number + "\nPrice " + (number * props.price))
                    }
                    } className="button-text">Add to cart</button>
                </div>
        </React.Fragment>
    )
    
}

export default ItemCount