import React from "react";
import { useState } from "react";
import "./project_pagination.scss";
import Project from "../../data projects/projects.json";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import TextAndImg from "../../components/text_and_img/TextAndImg";

function Project_pagination() {
  const [itemActive, setItemActive] = useState(1);

  const nextItem = () => {
    setItemActive(itemActive === 5 ? 1 : itemActive + 1);
  };

  const prevItem = () => {
    setItemActive(itemActive === 1 ? 5 : itemActive - 1);
  };

  return (
    <>
      <section className="section">
        <div className="container_projects">
          {Project &&
            Project.map((project) => {
              return (
                <div key={project.id}>
                  {itemActive === project.id && (
                    <div className="container_project container">
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
                      <div className="container_change_project">
                        {window.innerWidth < 900 ? (
                          <>
                            <div className="container_image_project">
                              <img src={project.img} />
                            </div>
                            <div className="change_buttons">
                              <BsFillArrowLeftCircleFill onClick={prevItem} />
                              <h3>{project.title}</h3>
                              <BsFillArrowRightCircleFill onClick={nextItem} />
                            </div>
                          </>
                        ) : (
                          <>
                            <BsFillArrowLeftCircleFill onClick={prevItem} />
                            <div className="container_image_project">
                              <img src={project.img} />
                              <h3>{project.title}</h3>
                            </div>
                            <BsFillArrowRightCircleFill onClick={nextItem} />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

      {Project &&
        Project.map((project) => {
          return (
            <div key={project.id}>
              {itemActive === project.id && (
                <>
                  <section className="section">
                    <TextAndImg
                      title={project.title}
                      text={project.concept}
                      img={project.img}
                    />
                  </section>
                  <section className="section">
                    <TextAndImg
                      title={project.title}
                      text={project.concept}
                      img={project.img}
                    />
                  </section>
                </>
              )}
            </div>
          );
        })}
    </>
  );
}

export default Project_pagination;
