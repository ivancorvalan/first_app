import React, {useContext, useState } from "react";

const Context = React.createContext()

export function CartContext ( {children}) {
    const [itemsCart , setItemsCart ] = useState([])
    
    const changeQuantity = (item) => {
        const toChange = itemsCart?.filter(new_item => new_item.id===item.id)
        item.quantity = (toChange[0]?.quantity) + (item?.quantity)
        if (item.quantity > item.stock){
            return false
        }else{
            return item
        }
    }

    const isOnCart = (item) => {
        return itemsCart?.findIndex(itemOnCart => itemOnCart.id === item.id)
    }

    const addToCart = (item) => {
        const indice = isOnCart(item)
        console.log(indice)
        if (indice === -1){
            setItemsCart([...itemsCart , item])
        }
        else{
            const itemChanged = changeQuantity(item)
            if (itemChanged !== false){
                itemsCart[indice] = itemChanged
                setItemsCart(itemsCart)
                console.log(itemsCart)
            }
            else{
                alert("La cantidad seleccionada excede el stock")
            }
        }
    }
    console.log(itemsCart)
    return (
        <Context.Provider value={{addToCart , itemsCart , setItemsCart}}>
            {children}
        </Context.Provider>
    )
}

export function useAddCart(){
    return useContext(Context).addToCart
}

export default CartContext