import React from "react";
import WorkImage from "../assets/work.svg";
import Button from "../components/Button";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../styles/sections/Starter.scss";
import Navbar from "../components/Navbar";

function Starter() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <div className="content">
          <h1>This Website Has Been Created to Practice React Skills.</h1>
          <p>This website has been created to demonstrate and develop React and Framer Motion skills.</p>

          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button content="Request Quote" icon={<HiOutlineArrowNarrowRight />} color="pink" />
          </div>
        </div>

        <div className="image">
          <img src={WorkImage} alt="Work Image" />
        </div>
      </div>
    </div>
  );
}

export default Starter;
