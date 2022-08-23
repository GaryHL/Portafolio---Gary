import React from "react";
import "./info_section.scss";
import Tilt  from "react-vanilla-tilt";


function Info_section(props) {
  
  return (
    <div className="container_info_section">
      <div className="container_image" data-aos="zoom-in-down">
        <Tilt className="tilt" >
          <img src={props.img} />
        </Tilt>
      </div>
      <div className="container_details" data-aos="zoom-in-down">
        <h2>
          {props.title}
          <br /> {props.title2}
        </h2>
        <div className="lines">
          <div className="line l1"></div>
          <div className="line l2"></div>
        </div>
        <h3>{props.subtitle}</h3>
        {props.cta_zone}
      </div>
    </div>
  );
}

export default Info_section;
