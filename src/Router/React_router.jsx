import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from '../views/welcome/Welcome'
import Projects from '../views/projects/Projects';
import Navbar from '../components/navbar/Navbar'
import AOS from 'aos';


function React_router() {
  AOS.init();
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default React_router