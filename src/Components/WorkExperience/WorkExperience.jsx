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
      <div className="workExperience-heading">
        <h2
          className="mainHead"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Work
        </h2>
        <h2 className="mainHead" style={{ color: "var(--orange)" }}>
          Experience
        </h2>
        <p
          className="mainHead"
          style={{ color: darkMode ? "white" : "var(--gray)" }}
        >
          What I have Done so far.
        </p>
      </div>

      <div className="workExperienceDisplay">
        {workExperienceInfo.map((info, index) => (
          <div className="card-wrapper" key={index}>
            <WorkExperienceCards info={info} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
