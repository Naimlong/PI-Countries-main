import Card from "../../components/Card/Card";
import { Link } from 'react-router-dom';
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountriesA_Z, getCountriesByContintent, getActivities, byActivities } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/paginado";
import "./home.css"


const Home = () =>{

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    //const activity = useSelector(state => state.activity)

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setcountriesPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [order, setOrder] = useState("");

    useEffect(()=>{
        dispatch(getCountries());
        //dispatch(byActivities())
    },[dispatch]);

    const handlerClick = (e) =>{
        e.preventDefault();
        dispatch(getCountries())
    }

    const handlerSort = (e) => {
        e.preventDefault();
        dispatch(orderCountriesA_Z(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    const handlerFilterContinents = (e) => {
        dispatch(getCountriesByContintent(e.target.value))
    };

    // const handlerActivities = (e) => {
    //     dispatch(byActivities(e.target.value))
    //     setOrder(e.target.value)
    // }
    // useEffect(() => {
    //     dispatch(getActivities())
    // }, [dispatch])

    return(
        <div className="home">
            <div>
                <div>
                    <NavBar/>
                    <button onClick={e => {handlerClick(e)}}>
                    Load countries
                    </button>
                </div>
                <div>
                    
                    <SearchBar/>
                    <select className="select" onChange={(e) => handlerSort(e)}>
                        <option value="ascd">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                    <select className="select" onChange={(e) => handlerFilterContinents(e)}>
                        <option value="all">Selecciona</option>
                        <option value="all">todos</option>
                        <option value="Africa">africa</option>
                        <option value="South America">america del sur</option>
                        <option value="North America">america del norte</option>
                        <option value="Antarctica">antartida</option>
                        <option value="Asia">asia</option>
                        <option value="Europe">europa</option>
                        <option value="Oceania">oceania</option>
                    </select>
                    {/* <select onChange={handlerActivities}>
                        <option value="all">Todas las actividades</option>
                        {activity.map((el) => {
                            return (
                                <option key={el.id} value={el.name}>
                                {el.name}
                                </option>
                            );
                            })}
                    </select> */}

                </div>
                <div>    
                    <Paginado
                        countriesPerPage={countriesPerPage}
                        allCountries={allCountries}
                        paginado={paginado}
                    />
                </div>

                <div className="card">
                    <br />
                    <div></div>
                    <br />
                    <Suspense fallback={<span className="loader"></span>}>
                        {currentCountry?.map((el) => {
                            return (
                            <Card
                                name={el.name}
                                flags={el.flags}
                                continents={el.continents}
                                key={el.id}
                                id={el.id}
                            />
                        );
                    })}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
export default Home;