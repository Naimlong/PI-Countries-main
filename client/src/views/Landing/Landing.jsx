import React from "react";
import { Link } from "react-router-dom";
import "./landing.css"

const Landing = () =>{
    return(
        <div className="principal">
            <h1 className="titleL">Proyecto Individual </h1>
            <Link to="/home">
                <button className="btn">Empezar</button>
            </Link>
            
        </div>
    )
}
export default Landing;