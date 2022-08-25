import React from "react";
import { useState } from "react";
import "./project_pagination.scss";
import Project from "../../data projects/projects.json";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Project_pagination() {
  //carrusel de una sola imagen o bueno, varias imagenes
  const [itemActive, setItemActive] = useState(1);

  const nextItem = () => {
    setItemActive(itemActive === 5 ? 1 : itemActive + 1);
  };

  const prevItem = () => {
    setItemActive(itemActive === 1 ? 5 : itemActive - 1);
  };

  // fin del carrusel de imagenes

  return (
    <>
      <div className="container_projects">
        {Project &&
          Project.map((project) => {
            return (
              <div key={project.id}>
                {itemActive === project.id && (
                  <div className="container_project">
                    <div className="container_data_project">
                      <article>
                        <h2>Rol:</h2>
                        <p>{project.rol}</p>
                      </article>
                      <article>
                        <h2>Date:</h2>
                        <p>{project.date}</p>
                      </article>
                      <article>
                        <h2>Overview:</h2>
                        <p>{project.overview}</p>
                      </article>
                    </div>

                    <div className="container_image_project">
                      <div className="project_image">
                        <div className="container_prueba_image">
                          <img src={project.img} />
                        </div>
                      </div>
                      <div className="container_change_project">
                        <div onClick={prevItem} className="btn_change_project">
                          Anterior
                        </div>
                        <div className="pagination">
                          <div className="point_pagination"></div>
                          <div className="point_pagination"></div>
                          <div className="point_pagination"></div>
                        </div>
                        <div onClick={nextItem} className="btn_change_project">
                          Siguiente
                        </div>
                      </div>
                    </div>

                    <div className="container_final_result">
                      <h2>Final result</h2>
                      <div className="links_project">
                        <div className="square_button">Visitar sitio</div>
                        <div className="square_button">
                          Repositorio en Github
                        </div>
                      </div>
                    </div>

                    <div className="back">
                      <Link to="/welcome">
                        <h2>BACK</h2>
                        <BsArrowLeft className="arrow" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Project_pagination;
