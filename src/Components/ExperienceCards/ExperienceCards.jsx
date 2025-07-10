import React from "react";
import "./ExperienceCards.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function ExperienceCards({ information }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="experienceCards">
        <div className={darkMode ? "dark-mode-div" : "light-mode-div"}>
          {information.number}
        </div>
        <span>{information.text1}</span>
        <span>{information.text2}</span>
      </div>
    </>
  );
}
export default ExperienceCards;
