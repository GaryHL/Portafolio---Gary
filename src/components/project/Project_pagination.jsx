import React from 'react'
import { useState } from 'react'
import './project_pagination.scss'
import Project from '../../data projects/projects.json'
import {BsFillCaretRightFill } from "react-icons/bs";
import {BsFillCaretLeftFill } from "react-icons/bs";


function Project_pagination () {

    //carrusel de una sola imagen o bueno, varias imagenes
    const [itemActive, setItemActive] = useState(1);


    const nextItem = () => {
      setItemActive(itemActive === 5? 1 : itemActive + 1);
    };
  
    const prevItem = () => {
      setItemActive(itemActive === 1 ?  5 : itemActive - 1);
    };

    // fin del carrusel de imagenes 


    

  return (
    <>
    <div className="container_projects">
      
        {
          Project && Project.map(project => {
            return(
              <div key={project.id}>
                {itemActive === project.id && (
                  <div className="container_project">
                    <div className="container_data_project">
                      <article>
                        <h2>Rol:</h2>
                        <p>{project.rol}</p>
                      </article>
                      <article>
                        <h2>Date</h2>
                        <p>{project.date}</p>
                      </article>
                      <article>
                        <h2>Rol:</h2>
                        <p>{project.overview}</p>
                      </article>
                    </div>

                    <div className="container_image_project">
                      <BsFillCaretLeftFill onClick={prevItem} className="btn_change_project"/>
                      <div className="project_image">
                        <div className="container_prueba_image">
                          <img src={project.img}/>
                        </div>
                        <div className="pagination">
                          <div className="point_pagination"></div>
                          <div className="point_pagination"></div>
                          <div className="point_pagination"></div>
                        </div>
                      </div>
                      <BsFillCaretRightFill onClick={nextItem} className="btn_change_project"/>
                      {/* <button onClick={nextItem} className="btn_change_project"> Después </button> */}
                    </div>

                    <div className="container_concept"></div>
                    <div className="container_development"></div>
                    <div className="container_final_result"></div>
                    {/* <h1 key={project.id}>{project.title}</h1>
                    <h2 >{project.rol} </h2> */}
                  </div>
						    )}
              </div>
          )})
        }

      
    </div>
    
    </>
  )
}

export default Project_pagination