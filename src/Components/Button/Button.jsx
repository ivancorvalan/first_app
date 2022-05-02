import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({link , text_button , action}) =>{
    return (
            <div className="g-col-4">
                <Link to={link}>
                    <button className="btn-onHome">{text_button}</button>
                </Link>
            </div>
    )
}

export default ButtonLink