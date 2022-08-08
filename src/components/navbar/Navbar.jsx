import React, { useState } from 'react'
import '../navbar/navbar.scss'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Navbar() {

  const  [clicked, setClicked] = useState(false)

  return (
    <>
      <div className="container_nav">
        <h2>Gary Lima</h2>
        <div className="container_icons">
          <BsGithub/>
          <BsLinkedin/>
          
          <div className="menu" onClick={()=> setClicked(!clicked)} >
            <div className="line"></div>
            <div className="line"></div>
          </div>
          
        </div>
        
      </div>
      <div className={`menu_nav ${clicked ? 'open' : "close"}`}>
        <ul>
          <li>INICIO</li>
          <li>PROYECTOS</li>
          <li>SOBRE MI</li>
          <li>CONTACTO</li>
        </ul>
      </div> 
    </>
  )
}

export default Navbar