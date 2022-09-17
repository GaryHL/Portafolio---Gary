import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import './back_menu.scss'


const Back_menu = () => {
  return (
    <>
      <div className="container_back_menu">
        <Link to="/welcome">
        <BsGithub />

        </Link>
      </div>
    </>
  );
};

export default Back_menu;
