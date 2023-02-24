import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";


const Home = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return(
        <div>
            <h1>Estas en Home</h1>
            <Cards/>
        </div>
    )
}
export default Home;