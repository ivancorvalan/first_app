import React from "react";
import './Home.css'


function Home({home}){
    return(
        <React.Fragment>
            <div className="container-home">
                <h1 className="tittle-style">{home.tittle}</h1>
                <p className="card-text">{home.text}</p>
            </div>
        </React.Fragment>
        )
}

export default Home