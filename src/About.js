import React from "react";
import Typewriter from "typewriter-effect";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={require("./assets/profile-pic.jpg")} alt="prof-pic" />
      </div>
      <div className="about-details">
        <h1>
          <Typewriter
            options={{
              loop: true,
              typingSpeed: 1000,
              delay: 50,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`SIMEON PROSPER (BURGEON🚢✈️🧳)`)
                .pauseFor(1000)
                .deleteAll(1)
                .start();
            }}
          />
        </h1>

        <p>
          I am a passionate web developer with a strong enthusiasm for creating
          dynamic, visually appealing, and user-friendly web pages. My journey
          in web development began with a curiosity about how the digital world
          operates, and it has evolved into a fulfilling career centered around
          problem-solving and creativity. I take great pride in designing and
          building responsive, accessible, and performance-optimized
          applications that provide meaningful experiences for users. Exploring
          new technologies is one of my favorite aspects of being a developer.
        </p>
        <br />

        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Version Control (Git/GitHub)</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
