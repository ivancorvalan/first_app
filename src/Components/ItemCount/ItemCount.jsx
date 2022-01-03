import React , {useState} from "react";
import './ItemCount.css'

function ItemCount({stock , onAdd , initial} ) {
    const [number , setNumber] = useState(Number(initial))

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
                        if (number < stock){
                            setNumber(number + 1)
                        }
                    }}>+</button>
                </div>
                <div className="button-style-add">
                    <button className="button-text" onClick={()=>onAdd(number)} >Add to cart</button>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default ItemCount
