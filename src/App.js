import './App.css';
import Home from './Pages/Home';
import React from "react";
import Contact from './Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

let Component
switch (window.location.pathname) {
  case "/":
    Component = Home
    break;
  case "/contact":
    Component = Contact
    break
  default:
    break;
}
  return (
    <div className="App">
   <Component/>
    </div>
  );
}

export default App;
