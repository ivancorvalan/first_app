import { collection, getDocs, getFirestore , limit, orderBy, query , where} from "firebase/firestore"
import React , {useEffect, useState} from "react"
import CardMessage from "../CardMessage/CardMessage"
import Loading from "../Loading/Loading"
/*import {inbox , useInbox} from "../../Context/InboxContext"*/
import './Inbox.css'
/*mport '../extern-CSS/hover.css'*/

const Inbox = () => {
    const [questions , setQuestions] = useState([[]]);
    const [loader, setLoader] = useState(true);
    const [browser , setBrowser] = useState({})
    const [selectedOrder , setSelectedOrder] = useState({type:"datetime" , order:"desc"})
    const listServices= [{name:"Demanda" , value:"Demanda"},
                        {name:"Intimación" , value:"Intimación"},
                        {name:"Asesoria" , value:"Asesoria"}]
    const listRead =    [{name:"Leido" , value:true},
                        {name:"No Leido" , value:false}]
    const dataBase = getFirestore()

    const getInbox = () => {
        const reference = query(collection(dataBase , "inbox"),
                            orderBy(selectedOrder.type , selectedOrder.order),
                            limit(10))
        getDocs(reference)
            .then((snapShot) => {
                setQuestions(snapShot.docs)
                setLoader(false)
                })
                return
            }
            
    const filterDatabase = (filter , element) => {
        console.log(filter , element )
        const reference = query(collection(dataBase , "inbox"),
                        where(filter , "==" , element.value))
        getDocs(reference)
            .then((snapShot) =>{
                setQuestions(snapShot.docs)
            })
            .catch((error) => {
                console.log(error)
            })
            return
    }
    
    const filterText = (dato , type_filter) => {
        if (dato.browser !== undefined){
            const reference = query(collection(dataBase , "inbox"),
                                    where(type_filter , ">=" , dato.browser)
                                    )
            getDocs(reference)
                .then((snapShot) => {
                    if (Object.keys(snapShot.docs).length !== 0){
                        setQuestions(snapShot.docs)
                    }else{
                        getInbox()
                        }
                    }
                )
            }
            return
        }
/*
    const sortingAsc = (typeSort) => {
        console.log(questions?.sort((a , b) => a.data()[typeSort] > b.data()[typeSort]))
        return
    }

    const sortingDesc = (typeSort) => {
        console.log(questions?.sort((a , b) => a.data()[typeSort] < b.data()[typeSort]))
        return
    }
*/   
    const onChange = (evt) => {
            evt.preventDefault()
            setBrowser({
                ...browser,
                [evt.target.name] : evt.target.value
                    }
            )
            return
        }
    
    const onChangeSort = (evt) => {
            evt.preventDefault()
            setSelectedOrder({type : evt.target.name , order : evt.target.value})
            return
        }

    const filterMsgCounter = (element , property) => {
        let counter = (questions?.filter(question => ((question.data()[property] === element.value))).length)
        if (counter > 0){
            return counter
        }
        else{
            return 
        }
    }
    
    const allMsgCounter = () => {
        let counter = questions?.length
        if (counter > 0){
            return counter
        }
        else{
            return 
        }
    }

    useEffect(()=>{
        getInbox()
        },[selectedOrder])

    const Filters = ({ tittle , filter , categories}) =>{
        let all = allMsgCounter()
        return(
        <>
            <div key={tittle} className="inbox-container-filters-buttons">
                <label className="inbox-container-filter-title">{tittle}</label>
                <button className="filter-button" onClick={getInbox} value={"Todos"}>
                    <div className="filter-button-container-text">
                        <p className="filter-button-text-cat">Todos</p>
                        <p className="filter-button-text-qty">{all}</p>    
                    </div>
                </button>
                {categories?.map((categorie)=>{
                    let qty = filterMsgCounter(categorie , filter)
                    return(
                        <div key={categorie.name}>
                            <button className="filter-button" onClick={()=>{filterDatabase(filter, categorie)}} value={categorie.value}>
                            <div className="filter-button-container-text">
                                <p className="filter-button-text-cat">{categorie.name}</p>
                                <p className="filter-button-text-qty">{qty}</p>    
                            </div>
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
        )
    }

    return loader ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div className="inbox-background">
                <div className="container inbox">
                    <div className="inbox-header">
                        <div className="inbox-tittle">
                            <p>Inbox</p>
                        </div>
                        <div className="inbox-finder">
                            <input className="inbox-finder-field" type="text" onChange={onChange} name="browser" placeholder="Buscar Apellido" />
                            <button className="inbox-finder-button" onClick={()=>{filterText(browser , "surname")}} value="buscar">
                                <span className="material-icons-outlined">search</span>
                            </button>
                        </div>
                    </div>
                    <div className="inbox-container">
                        <div className="inbox-container-filters">
                            <Filters tittle={"Servicios"} filter={"type_service"} categories={listServices}/>
                            <Filters tittle={"Mensajes"} filter={"read"} categories={listRead}/>
                        </div>
                        <div className="inbox-container-msg">
                            <div className="inbox-container-msg-order">
                                <div className="inbox-container-msg-order-buttons">
                                    <label className="inbox-msg-button-title">Fecha</label>
                                    <select name="datetime" defaultValue={"desc"} onChange={onChangeSort}>
                                        <option className="inbox-msg-button-option" name="datetime" value={"desc"}>Reciente</option>
                                        <option className="inbox-msg-button-option" name="datetime" value={"asc"}>Antiguo</option>
                                    </select>
                                </div>
                                <div className="inbox-container-msg-order-buttons">
                                    <label className="inbox-msg-button-title">Orden</label>
                                    <select name="surname" defaultValue={"asc"} onChange={onChangeSort}>
                                        <option className="inbox-msg-button-option" name="surname" value={"asc"}>A-Z</option>
                                        <option className="inbox-msg-button-option" name="surname" value={"desc"}>Z-A</option>
                                    </select>
                                </div>
                        </div>
                        {
                            questions?.map((question)=>{
                            return(
                                <CardMessage
                                id={question.id}
                                key={question.id}
                                read={question.data().read}
                                resume={question.data().resume}
                                message={question.data().message}
                                name={question.data().first_name}
                                surname={question.data().surname}
                                city={question.data().city}
                                province={question.data().province}
                                phone={question.data().phone}
                                email={question.data().email}
                                type_service={question.data().type_service}
                                datetime={question.data().datetime}
                                />
                                    )
                                })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Inbox