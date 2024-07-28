import React from "react";
import WorkImage from "../assets/work.svg";

function Starter() {
  return (
    <div className="main-container">
      <div className="container">
        <h1>
          This Website Has Been Created to Practice React Skills.
        </h1>

        <p>
          This website has been created to demonstrate and develop React and Framer Motion skills.
        </p>

        <div className="button-container"></div>
      </div>

      <div className="image">
        <img src={WorkImage} alt="Work Image" />
      </div>
    </div>
  )
}

export default Starter
