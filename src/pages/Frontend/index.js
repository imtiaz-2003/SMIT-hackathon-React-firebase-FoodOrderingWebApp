import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Service/Service';

import Team from './Team/Team'
import ReserveTable from './ReserveTable/ReserveTable';


export default function index() {
  return (
    <>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='service' element={<Service/>} />
          <Route path = 'team' element = {<Team/>} />
          <Route path='reserveTable' element = {<ReserveTable/>} />
        </Route>
      </Routes>


    </>
  )
}
