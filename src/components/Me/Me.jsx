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
              "https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg?auto=webp&quality=95&crop=16:9&width=675"
            }
          ></img>
        </div>
      </div>
    </>
  );
}

export default Me;
