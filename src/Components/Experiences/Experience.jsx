import React from "react";
import "./Experience.css";

import ExperienceCards from "../ExperienceCards/ExperienceCards";
import { experienceInfo } from "../../constants";

function Experience() {
  return (
    <div className="experience">
      {experienceInfo.map((info, index) => {
        return (
          <div key={index}>
            <ExperienceCards information={info} />
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
