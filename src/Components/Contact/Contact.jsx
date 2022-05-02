import React , {useState} from "react"
import { Timestamp } from 'firebase/firestore';
import UploadMessage from "../UploadMessage/UploadMessage";
import './Contact.css'

const Contact = () => {
    const [createMsg , setCreateMsg] = useState({})

    const isAnEmail = (word) => {
        if (word.includes("@") && word.includes(".")){
            return true
        }else{
            return false
        }
    }

    const sendMsg = (evt) => {
        evt.preventDefault()
        if (
            createMsg.first_name !== undefined &&
            createMsg.surname !== undefined &&
            createMsg.phone !== undefined &&
            createMsg.email !== undefined &&
            createMsg.message !== undefined &&
            isAnEmail(createMsg.email) === true
            ){
            createMsg["read"] = false
            createMsg["datetime"] = Timestamp.now()
            UploadMessage(createMsg)
        }
    }

    const onChange = (evt) => {
        evt.preventDefault()
        setCreateMsg({
            ...createMsg,
            [evt.target.name] : evt.target.value
                }
        )
    }
    
    return (
        <React.Fragment>
            <div className="contact-background">
                <div className="contact-container">
                    <h2 className="contact-header">Contacto</h2>
                    <form className="form">
                        <div className="form-container">
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                                <input type="text" name="first_name" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="Nombre" required />
                            </div>
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
                                <input type="text" name="surname" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="Apellido" required />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Teléfono</label>
                                <input type="number" name="phone" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="+54 1122334455" required />
                            </div>
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
                                <input type="email" name="email" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="nombre@email.com" required />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Ciudad</label>
                                <input type="text" name="city" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="Ciudad" required />
                            </div>
                            <div className="form-container-input">  
                                <label htmlFor="exampleFormControlInput1" className="form-label">Provincia</label>
                                <input type="text" name="province" onChange={onChange} className="form-input" id="exampleFormControlInput1" placeholder="Provincia" required />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-input">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Seleccione Servicio</label>
                                <select name="type_service" onChange={onChange}  defaultValue={"Asesoria"} className="form-control" id="exampleFormControlInput1" required>
                                    <option value="Demanda">Demanda</option>
                                    <option value="Asesoria">Asesoria</option>
                                    <option value="Intimación">Intimación</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-input-data">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label-data">Asunto</label>
                                <input type="text" name="resume" maxLength={50} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="Resumen (50 carácteres max.)" required />
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-input-data">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label-data">Consulta</label>
                                <textarea className="form-control" maxLength={4000} name="message" onChange={onChange} id="exampleFormControlTextarea1" rows="4" placeholder="Consulta (4000 carácteres max.)" required ></textarea>
                                <button type="submit" className="button-send-contact" onClick={sendMsg}>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact