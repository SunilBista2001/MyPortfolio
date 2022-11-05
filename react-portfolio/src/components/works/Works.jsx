import React, { useState } from "react";
import { skillSet } from "../../skills";

import "./works.scss";
const Works = () => {
  const [icon, setIcon] = useState(skillSet);
  return (
    <div className="works" id="works">
      <h1>Skills</h1>
      <div className="container">
        {icon.map((e) => {
          return (
            <>
              <div className="wrapper">
                <img src={e.img} alt={e.title} />
                <div className="skillPortfolio">
                  <h2>{e.title}</h2>
                  <h5>{e.skill}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
