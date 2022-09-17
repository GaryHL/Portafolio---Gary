import React from "react";
import "./textAndImg.scss";
import { useState } from "react";

function TextAndImg(props) {
  const [addCta, setAddCta] = useState(props.addCta);

  return (
    <div className="section_textAndImg">
      <h3 className="title_section_textAndImg">{props.title}</h3>
      <div
        className={
          addCta ? "container_textAndImg addCta" : "container_textAndImg"
        }
      >
        <div className="container_text">
          <p>{props.text}</p>
        </div>
        <div className="container_img">
          <img src={props.img} />
        </div>
      </div>
      <div>{props.ctaZone}</div>
    </div>
  );
}

export default TextAndImg;
