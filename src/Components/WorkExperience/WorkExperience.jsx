import { workExperienceInfo } from "../../constants";
import WorkExperienceCards from "../WorkExperienceCards/WorkExperienceCards";
import "./WorkExperience.css";
import { themeContext } from "../../../Content";
import { useContext } from "react";

function WorkExperience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="workExperience">
      <div className="workExperience-left">
        <span style={{ color: darkMode ? "white" : "" }}>Work</span>
        <span>Experience</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          What I have Done so far.
        </span>
      </div>

      <div className="workExperience-right">
        <div className="workExperienceDisplay">
          {workExperienceInfo.map((information, index) => {
            let positionClass = "";
            if (index === 0) positionClass = "card-top-right";
            if (index === 1) positionClass = "card-bottom-left";
            if (index === 2) positionClass = "card-center";

            return (
              <div className={positionClass} key={index}>
                <WorkExperienceCards info={information} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
