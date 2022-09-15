import React from "react";
import Info_section_active from "../../components/info_section_active/Info_section_active";
import Project_pagination from "../../components/project/Project_pagination";
import "./projects.scss";
import Change_page from "../../components/loader/Change_page";
import Pc_work from "../../assets/images/pc_work.png";

function Projects() {
  return (
    <>
      <Change_page />
      <div className="container">
        <section className="section">
          <Info_section_active
            title="Mis"
            title2="Proyectos"
            img={Pc_work}
            subtitle="Estos son algunos de mis proyectos."
          />
        </section>
          <Project_pagination />
        
      </div>
    </>
  );
}

export default Projects;
