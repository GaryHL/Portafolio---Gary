import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="container_nav">
        <h2 className={`name ${clicked ? "open" : ""}`}>Gary Lima</h2>
        <div className="container_icons">
          <Link to="//github.com/GaryHL" target="_blank" >
            <BsGithub />
          </Link>
          <Link  to="////www.linkedin.com/in/gary-lima-613611230/" target="_blank">
            <BsLinkedin />
          </Link>
          <div className="menu" onClick={() => setClicked(!clicked)}>
            <div className={`line ${clicked ? "open" : ""}`}></div>
            <div className={`line ${clicked ? "open" : ""}`}></div>
          </div>
        </div>
      </div>
      <div className={`menu_nav ${clicked ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setClicked(!clicked)}>
              HOME
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setClicked(!clicked)}>
              PROYECTOS
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setClicked(!clicked)}>
              SOBRE MI
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setClicked(!clicked)}>
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
