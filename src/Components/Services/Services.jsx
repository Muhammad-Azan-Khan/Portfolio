import React from "react";
import "./Services.css";
import ServicesCards from "../Services-cards/Services-cards";
import { serviceCard } from "../../constants";
import { themeContext } from "../../../Content";
import { useContext } from "react";
import CV from "./Muhammad_Azan_Khan.pdf";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      <div className="services-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Turning ideas into sleek websites with React, JavaScript, and clean
          code magic. From visuals to logic — I mix creativity with C++ power
          under the hood.
        </span>
        <a href={CV} download>
          <button className="services-button button">Download CV</button>
        </a>
      </div>

      <div className="services-right">
        <div className="displayCards">
          {serviceCard.map((listCard, index) => {
            let positionClass = "";
            if (index === 0) positionClass = "card-one";
            if (index === 1) positionClass = "card-two";
            if (index === 2) positionClass = "card-three";

            return (
              <div className={positionClass} key={index}>
                <ServicesCards serviceCard={listCard} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Services;
