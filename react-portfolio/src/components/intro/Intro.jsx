import React, { useEffect } from "react";
import { useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { init } from "ityped";
import "./intro.scss";

const Intro = ({ menuOpen }) => {
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 80,
      strings: [
        "Front-End Enthusiast",
        "React Developer",
        "Team Person",
        "UI Desginer",
      ],
    });
  }, []);
  const textRef = useRef();
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            className={menuOpen ? "imgcontainer active" : "imgcontainer"}
            src="../assets/man.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            Hi, I'm Sunil <span className="icon">👋</span>
          </h1>
          <h5>
            and I am <span ref={textRef}></span>
          </h5>
          <div className="socials">
            <div className="socialIcon linkedIn">
              <LinkedInIcon className="icon" />
              <a
                href="https://www.linkedin.com/in/sunil-bista-4079a8245/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div className="socialIcon github">
              <GitHubIcon className="icon" />
              <a href="https://github.com/SunilBista2001" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
