import React from "react";
import "./Portfolio.css";
import { projectsInfo } from "../../constants";
import ProjectCards from "../ProjectCards/ProjectCards";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <div className="projectsDiv">
        {projectsInfo.map((information, index) => {
          return (
            <div key={index}>
              <ProjectCards info={information} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
