import {collection, getDocs, orderBy , query , getFirestore } from "firebase/firestore";
import React, {useContext, useEffect, useState } from "react";
const Context = React.createContext()

export function InboxContext ( {children} ) {;
    const [selectedOrder , setSelectedOrder] = useState({type:"datetime" , order:"desc"})
    const dataBase = getFirestore()
    const [inbox , setInbox] = useState([[]])

    const getInbox = () => {
        const reference = query(collection(dataBase , "inbox"),
                            orderBy(selectedOrder.type , selectedOrder.order))
        getDocs(reference)
            .then((snapShot) => {
                return(snapShot.docs)
                    }
                )
        }
    
    useEffect(()=>{
        getInbox()
    },[])
    setSelectedOrder()
    setInbox([[]])

    return (
        <Context.Provider value={{inbox , useInbox}}>
            {children}
        </Context.Provider>
    )
}

export function useInbox(){
    return useContext(Context).inbox
}

export default InboxContext