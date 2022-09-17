import React from "react";
import './links_project.scss'

function Links_project() {
  return (
    <>
      <div className="container_final_result">
        <h2>Final result</h2>
        <div className="links_project">
          <div className="square_button">Visitar sitio</div>
          <div className="square_button">Repositorio en Github</div>
        </div>
      </div>
      <div className="back">
        {/* <Link to="/welcome">
          <h2>BACK</h2>
          <BsArrowLeft className="arrow" />
        </Link> */}
      </div>
    </>
  );
}

export default Links_project;
