import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from '../views/welcome/Welcome'

function React_router() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default React_router