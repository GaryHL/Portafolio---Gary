import React from "react";
import "./info_section_active.scss";
import Tilt from "react-vanilla-tilt";

function Info_section_active(props) {
  return (
    <div className="container_info_section_active">
      <div className="container_image_active">
        <Tilt className="tilt">
          <img src={props.img} />
        </Tilt>
      </div>
      <div className="container_details_active">
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

export default Info_section_active;
