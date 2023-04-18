import "./Card.css";
import { Link } from "react-router-dom";



const Card = ({ name, flags, continents, id }) =>{
    return(
        <div className="Card">
            
            <img src={flags} alt="img not found" width="275px" height="175px" />
            <h3 className="nameCountry">{name}</h3>
            <h5>{continents}</h5> 
            <Link to={`/details/${id}`}>
                <button className="buttonCard" >Details</button>
            </Link>
        </div>
    )
}

export default Card;