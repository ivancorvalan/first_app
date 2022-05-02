import React from "react";
import ButtonLink from "../../Button/Button";
import './Home.css'

function Home(){
    return(
        <React.Fragment>
            <div className="container background-home">
                <div className="container text-landing">
                    <div className="description-home">
                        <p className="container">Hola, soy <span className="span-description">Carolina Corvalán</span>, Abogada Laboralista recibida en la Universidad de Buenos Aires.<br></br>En <span className="span-description">AsistLegal</span> te brindamos asesoramiento completamente online!!!</p>
                        <div className="grid container-buttons">
                            <ButtonLink link={"/contact"} text_button={"Asesorate!"}/>
                            <ButtonLink link={"/service"} text_button={"Nuestros servicios"}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}

export default Home