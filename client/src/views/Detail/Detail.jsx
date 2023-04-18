import  React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import "./detail.css";

const Detail = (props) =>{
    console.log(props)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
      }, [dispatch]);

    const myCountry = useSelector((state) => state.detail);

    return (
        <div>
            <NavBar/>
            {
                myCountry ? (
                <div className="details">
                    <h1>{myCountry.name}</h1>
                    <img src={myCountry.flags} alt="img not found" width="275px" height="175px"/>
                    <h3>Capital: {myCountry.capital}</h3>
                    <h3>Id: {myCountry.id}</h3>
                    <h3>Continents: {myCountry.continents}</h3>
                    <h3>Population: {myCountry.population}</h3>
                    <h3>Subregion: {myCountry.subregion}</h3>
                    <h3>Area: {myCountry.area}</h3>
                    
                </div>
                ) : (
                    <p>loading</p>
                )
            }
            
        </div>
    );
}

export default Detail;