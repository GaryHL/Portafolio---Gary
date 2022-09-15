import React from "react";
import "./textAndImg.scss";

function TextAndImg(props) {
  return (
    <div className="section_textAndImg">
      <h3 className="title_section_textAndImg">{props.title}</h3>
      <div className="container_textAndImg">
        <div className="container_text"><p>{props.text}</p></div>
        <div className="container_img">
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
}

export default TextAndImg;
