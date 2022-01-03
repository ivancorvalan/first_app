import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


function Home(){
    return(
        <React.Fragment>
            <div className="container-home">
                <h1 className="tittle-style-home">They are not just <span className="span-tittle">printers</span>,<br /> they are solutions</h1>
                <div className="content-img-home">
                    <Link to='/category/printer' className="printers-img-home">
                        <img className='img-format-home' src='https://res.cloudinary.com/icorvalan/image/upload/c_scale,h_450,q_100,w_512/v1640226284/home_png/favpng_printer_emqnf3.png' alt='printer'/>
                    </Link>
                    <Link to='/category/mfp' className="printers-img-home">
                        <img className='img-format-home' src='https://res.cloudinary.com/icorvalan/image/upload/v1640226269/home_png/multifunction-printer_oduljv.png' alt='mfp' />
                    </Link>
                </div>
            </div>
        </React.Fragment>
        )
}

export default Home