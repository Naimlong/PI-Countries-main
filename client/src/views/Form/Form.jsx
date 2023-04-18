import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import "./form.css"


const Form = () => {
    
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.allCountries)

    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);

    const [form, setForm] = useState({
        name: "",
        season: "",
        difficulty: "",
        duration: "",
        nameCountry: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        season: "",
        difficulty: "",
        duration: "",
        nameCountry: [],
    });

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        validate({...form, [property]:value});

        setForm({...form, [property]:value});
    };

    const countryHandler = (event) => {
        const value = event.target.value

        setForm({...form, 
        nameCountry: [...new Set([...form.nameCountry, value])]});
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/activities`, form)
        .then(res=>alert(res))
    };

    const handleDelete = (e) =>{
        setForm({
            ...form,
            nameCountry: form.nameCountry.filter(occ => occ !== e)
        })
    };

    const validate = (form) => {
        if(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(form.name)){
            setErrors({...errors, name:""});
        } else{
            setErrors({...errors, name:"Error in the name"})
        }
        if(form.name === ""){
            setErrors({...errors, name:"not name"});
        }
    };

    return (
        <div>
            <NavBar/>
            <br />
                <div></div>
            <br />
            <form className="form" onSubmit={handleSubmit}>
                <div className="container">
                    <h2 className="title">Create activity</h2>
                    <div>
                        <label className="label">Name: </label>
                        <input className="inputN" type="text" value={form.name} name="name" onChange={changeHandler}/>
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div>
                        <label className="label">Season: </label>
                        <select required className="sele" name="season" value={form.season} onChange={changeHandler}>
                            <option value="">Select a season</option>
                            <option value="winter">winter</option>
                            <option value="spring">spring</option>
                            <option value="summer">summer</option>
                            <option value="autumm">autumm</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Difficulty: </label>
                        <select required className="sele" name="difficulty" value={form.difficulty} onChange={changeHandler}>
                            <option value="">Select a difficulty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Duration: </label>
                        <input className="inputT" type="time" name="duration" value={form.duration} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label className="label">Country: </label>
                        <select required name="nameCountry" className="sele" onChange={countryHandler}>
                            <option value="seleccionaPais">Select country</option>
                            {countries.map((e) => {
                                return (
                                    <option key={e.id} value={e.name}>
                                        {e.name}
                                    </option>
                                    );
                            })}
                        </select>
                        {/* <ul><li>{form.nameCountry.map(e => e + ", ")}</li></ul> */}
                        {form.nameCountry.map(e =>
                            <div>
                                <p>{e}</p>
                                <button onClick={() => handleDelete(e)}>X</button>
                            </div>)}
                        <div>
                            <button className="create" type="submit">create</button>
                        </div>
                        <br />
                            <div></div>
                        <br />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;