import "./Cards.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";


const Cards = () =>{

    const countries = useSelector(state=>state.countries)
    
    return(
        <div className="Cards">
            {countries.map(c=>{
                return <Card
                name={c.name}
                id={c.id}
                continents={c.continents}
                flags={c.flags}/>
            })}
        </div>
    )
}

export default Cards;