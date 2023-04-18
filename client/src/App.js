import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import NavBar from './components/NavBar/NavBar';

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>  
        <Route exact path="/details/:id" component={Detail}/>
        <Route exact path="/create" component={Form}/>  
      </Switch>
    </div>
  );
}

export default App;
