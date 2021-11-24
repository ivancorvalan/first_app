import React from "react";
import './Home.css'

function Home(props){
    return(
        <React.Fragment>
            <div className="container-home">
                <h1 className="tittle-style">{props.tittle}</h1>
                <p className="card-text">{props.text}</p>
            </div>
        </React.Fragment>
        )
}

export default Home