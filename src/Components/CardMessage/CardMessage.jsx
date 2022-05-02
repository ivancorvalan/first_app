import React, {useState } from "react";
import {getFirestore, updateDoc , doc , deleteDoc} from "firebase/firestore"

const CardMessage = ({id, city , province , read , resume , message , name , surname , phone , email , datetime , type_service}) => {
    const [collapse , setCollapse] = useState(false);
    const [msgRead , setMsgRead] = useState(read)
    const [hideMsg , setHideMsg] = useState(false)
    const db = getFirestore()
    
    const updateRead = (id , itsRead) => {
        itsRead
        ? setMsgRead(true)
        : setMsgRead(false)
        const ref = doc(db, "inbox", id);
        updateDoc(ref, {read: itsRead})
            .catch((error) => {
                console.log(error)
            })
        }

    const deleteMsg = (id) => {
        setHideMsg(true)
        deleteDoc(doc(db, "inbox", id))
            .then(()=>{
                console.log("Delete " + id)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    const show = () =>{
        if (collapse === false){
            setCollapse(true)
            updateRead(id , true)
        }
        else{
            setCollapse(false)
        }
    }

    const convertedDateTime = (datetime.toDate().toLocaleDateString()) + " " + (datetime.toDate().toLocaleTimeString())
    

    const BodyMsg = () =>{
        return collapse ? (
                        <React.Fragment>
                            <div className="msg-body">
                                <div className="msg-data">
                                    <h3 className="msg-body-title">Contacto</h3>
                                    <p><span>E-mail:</span> <a href="mailto:">{email}</a></p>
                                    <p><span>Telefono:</span> {phone}</p>
                                    <p><span>Ciudad:</span> {city}</p>
                                    <p><span>Provincia:</span> {province}</p>
                                </div>
                                <div className="msg-data">
                                    <h3 className="msg-body-title">Descripción</h3>
                                    <p className="msg-body-message">{message}</p>
                                    <div className="msg-action-container-buttons">
                                        <button className="msg-action-buttons-style" onClick={()=>{deleteMsg(id)}} title="Eliminar mensaje">
                                            <span className="material-icons-round">delete</span>
                                        </button>
                                        <button className="msg-action-buttons-style" onClick={()=>{updateRead(id , false)}} title="Marcar como no leído">
                                            <span className="material-icons-round">mark_email_unread</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        )
                        : (
                            <></>
                        )
                    }

    let styleRead , icon , showMsg
    msgRead
    ? styleRead = "msg-read"
    : styleRead = "msg-unread pulse"

    collapse
    ? icon = "unfold_less"
    : icon = "unfold_more"

    hideMsg
    ? showMsg = "msg-delete"
    : showMsg = "msg-background"

    return (
        <React.Fragment>
            <div className={showMsg}>
                <div className="msg-header-container">
                    <div className={styleRead} />
                    <p className="msg-name">{surname}, {name}</p>
                    <button className="msg-action-buttons-style" onClick={show}>
                        <span className="material-icons-round">{icon}</span>
                    </button>
                </div>
                <div className="msg-container">
                    <div className="msg-header">
                            <div className="msg-resume">
                                <p className="msg-service">{type_service}</p>
                                <p className="msg-title">{resume}</p>
                                <p className="msg-date">{convertedDateTime}</p>
                            </div>
                    </div>
                    <BodyMsg />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardMessage