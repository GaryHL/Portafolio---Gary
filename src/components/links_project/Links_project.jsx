import React from "react";
import './links_project.scss';
import { Link } from "react-router-dom";


function Links_project(props) {
  return (
    <>
      <div className="container_final_result">
        <h2>Final result</h2>
        <div className="links_project">
        <Link to={props.site} target="_blank" className="square_button" >Visitar sitio</Link>
        <Link to={props.repositorio} target="_blank" className="square_button" >Repositorio en Github</Link>
        </div>
      </div>
      <div className="back">
      </div>
    </>
  );
}

export default Links_project;
