import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="container_nav">
        <h2>Gary Lima</h2>
        <div className="container_icons">
          <BsGithub />
          <BsLinkedin />
          <div className="menu" onClick={() => setClicked(!clicked)}>
            <div className="line"></div>
            <div className="line"></div>
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
