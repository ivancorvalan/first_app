import React from "react"
import './Loading.css'
import LoadingIcon from './gif/loading.gif'

function Loading(){
    return (
        <React.Fragment>
            <div className="load-card">
                <img className="img-load-size" src={LoadingIcon} alt="loading.gif"></img>
                <h1 className="text-load">Loading products</h1>
            </div>
        </React.Fragment>
            )
}

export default Loading