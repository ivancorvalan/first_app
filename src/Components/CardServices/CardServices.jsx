import React from "react"

const CardServices = ({tittle_card , description}) => {
    return (
        <React.Fragment>
            <div className="card" style={{width: 20 + "rem"}}>
                <div className="card-body card-service">
                    <h5 className="tittle-by-service">{tittle_card}</h5>
                    <p className="detail-service">{description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardServices