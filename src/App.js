import React, {Component} from "react";
import Navbar from "./components/Navigation";
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from "./components/Contact";
import About from "./components/About";
import Games from "./components/Games";


class App extends Component{
render(){
  return (
    <BrowserRouter>
    <div >
      <Navbar />
      <Route exact path= '/' component={Home} />
      <Route path= '/About' component={About} />
      <Route path= '/Games' component={Games} />
      <Route path= '/Contact' component={Contact} />
      {/* <h1 className="mt 12 pb-12 border-b  text-red-600 border-red-700">React and Tailwind</h1> */}
    </div>
    </BrowserRouter> 
  );
}
}

export default App;
