import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () =>{
    return(
        <div className="NavBar">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/create">Form</Link>
        </div>
    )
}

export default NavBar;