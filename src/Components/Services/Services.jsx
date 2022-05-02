/*import { collection, getDocs, getFirestore } from "firebase/firestore"*/
import React , {useState} from "react"
import CardServices from "../CardServices/CardServices"
import Loading from "../Loading/Loading"
import './Services.css'

const Services = () => {
    
    const [loader, setLoader] = useState(false);
    
    /*
    const [listServices , setListServices] = useState([[]]);
    useEffect(()=>{
        setLoader(true)
        const db = getFirestore()
        const ref = collection(db , "services")
        getDocs(ref)
            .then((snapShot) => {
                setListServices(snapShot.docs)
                console.log(snapShot.docs)
            })
            .finally(()=>{
                setLoader(false)
            })
    },[])
    */
    const services = [{key: 1,
                    tittle_service:"Demanda",
                    detail_service:"Demanda"},
                    {key: 2,
                    tittle_service:"Intimación",
                    detail_service:"Intimación"},
                    {key: 3,
                    tittle_service:"Asesoria",
                    detail_service:"Asesoria"},
                ]

    return loader ? (
        <Loading />
    ) : (
        <React.Fragment>
            <div className="container background-services">
                <div className="container content-services">
                    {services?.map((service)=>{
                        return (
                            <CardServices key={service.key} tittle_card={service.tittle_service} description={service.detail_service}/>
                        )
                    })}
                </div>
            </div>
    </React.Fragment>)}

export default Services