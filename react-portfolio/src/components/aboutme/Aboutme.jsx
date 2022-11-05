import React from "react";
import "./aboutme.scss";
const Aboutme = () => {
  return (
    <div className="aboutme" id="aboutme">
      <h5 className="mee">Get To Know</h5>
      <h1 className="me">About Me</h1>
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img
              src="https://cdn.dribbble.com/users/1187836/screenshots/6539429/programer.gif"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <p>
              A passionate Full Stack Software Developer 🚀 having a special
              interest in Frontend technologies and experience of building Web
              applications with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
              <p className="about_me">
                {" "}
                I am a Computer Scientist who just graduated from the Tribhuvan
                University Kathmandu in Computer Science Majors. I am a highly
                skilled professional developer who loves to take on the
                challenges and then solve them.
              </p>
            </p>
            <div className="socials">
              <a href="#contact">Let's Talk</a>
              <a className="resume" href="../assets/resume.pdf" target="_blank">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
