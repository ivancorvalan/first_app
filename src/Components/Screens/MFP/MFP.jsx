import React from "react";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../itemListContainer/itemListContainer";

const MFP = () =>{
    return(
        <React.Fragment>
            <ItemListContainer category="MFP"/>
            <ItemDetailContainer />
        </React.Fragment>
    )
}

export default MFP