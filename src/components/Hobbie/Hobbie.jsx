import React from "react";
import "./hobbie.scss";

function Hobbie(props) {
  return (
    <>
      <div className="card_hobbie">
        <div className="container_icon_hobbie">
          <img src={props.icon_hobbie} />
        </div>
        <h2>{props.title_hobbie}</h2>
        <p>{props.description_hobbie}</p>
      </div>
    </>
  );
}

export default Hobbie;
