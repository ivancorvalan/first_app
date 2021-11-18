import React from "react";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../itemListContainer/itemListContainer";

const Printers = () =>{
    return(
        <React.Fragment>
            <ItemListContainer category="PRINTER"/>
            <ItemDetailContainer />
        </React.Fragment>
    )
}

export default Printers