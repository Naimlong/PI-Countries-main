import "./Card.css";


const Card = (props) =>{
    return(
        <div className="Card">
            {/*<p>Name:{props.name}</p>
            <p>Id:{props.id}</p>
            <p>Continents:{props.continents}</p>*/}
            
            <img src={props.flags} alt="imagen no disponible" width="275px" height="175px" />
            <h3 className="nameCountry">{props.name}</h3>
            <h5>{props.continents}</h5> 
        </div>
    )
}

export default Card;