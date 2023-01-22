import logo from './logo.svg';
import './App.css';
import './headerFooter.css';
import GetName from './profile';
import LifeComponent from './lifeCycleComponent';
import Login from'./login';
import Hooks from './hooks';
import CountryAPI from './countryAPI';
import RegionAPI from './regionAPI';
import { BrowserRouter as Router, Route , Link, Routes} from 'react-router-dom';






function App() {
  return (
    <div className='App'>
      <Router> 
        <div style={{margin:"10px",padding:'10px',display:'flex', justifyContent:"space-evenly"}}>    
          <Link style={{background:"black",color:"white"}} to="/countryAPI"> CountryAPI    </Link>
          <Link style={{background:"black",color:"white"}} to="/regionAPI">    RegionAPI </Link>
          <Link style={{background:"black",color:"white"}} to="/login">    Login  </Link>
          <Link style={{background:"black",color:"white"}} to="/lifeCycleComponent">    lifeCycleComponent  </Link>
          <Link style={{background:"black",color:"white"}} to="/hooks">    UseStateHook  </Link>
        </div>  

        <Routes>        
          <Route  exact path="/countryAPI" element = {<CountryAPI />}/>
          <Route  exact path="/regionAPI" element = {<RegionAPI />} />
          <Route  exact path="/login" element = {<Login />} />
          <Route  exact path="/lifeCycleComponent" element = {<LifeComponent />} />
          
          <Route  exact path="/hooks" element = {<Hooks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
