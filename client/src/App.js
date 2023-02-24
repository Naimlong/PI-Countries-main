import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import NavBar from './components/NavBar/NavBar';

import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing/>
      </Route>
      <NavBar/>
      <Route exact path="/detail">
        <Detail/>
      </Route>
      <Route exact path="/create">
        <Form/>
      </Route>
      <Route path="/home">
        <Home/> 
      </Route>
    </div>
  );
}

export default App;
