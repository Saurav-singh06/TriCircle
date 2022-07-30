import './App.css';
import Home from './Pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contactus from './Pages/Contactus';

function App() {
  return (
    <div className="App">
   {/* <Home/> */}
   <Contactus/>
    </div>
  );
}

export default App;
