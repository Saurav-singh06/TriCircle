import './App.css';
import Home from './Pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
   {/* <Home/> */}
   <Contact/>
    </div>
  );
}

export default App;
