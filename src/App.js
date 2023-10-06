import React, {useState, useEffect, createRef} from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import EventDetails from "./pages/EventDetails"
import Header from "./common/Header"
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="details/" element={ <Details/> } />
        <Route path='/event-details/:id' exact element={ <EventDetails/> }  />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;