import "./SearchBar.css"
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";

const SearchBar = () =>{
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(name))
    }

    return(
        <div>
            <input className="input" type="text"  onChange={handleInput}/> 
            <button className="submit" type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;
