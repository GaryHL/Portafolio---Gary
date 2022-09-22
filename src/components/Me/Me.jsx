import React from "react";
import "./me.scss";

function Me() {
  return (
    <>
      <div className="container_me">
        <div className="container_description_me">
          <h3>GARY LIMA</h3>
          <p>
            It is an application to keep people informed about the situation of
            covid-19 worldwide. The data is updated automatically and users can
            see detailed information for each country.
          </p>
        </div>
        <div className="container_image_me">
          <img
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F39%2F35%2Fman-wearing-face-mask-environmental-industrial-vector-26743935.jpg&f=1&nofb=1"
            }
          ></img>
        </div>
      </div>
    </>
  );
}

export default Me;
