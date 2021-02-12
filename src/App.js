import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact'
import Index from './components/Index/index'
import { BrowserRouter , Route } from "react-router-dom";
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    )
  }
}
export default App