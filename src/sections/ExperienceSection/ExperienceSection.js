import React, { Component } from "react";
import "./ExperienceSection.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-section">
        <div className="experience-section--title">
          <h1>Experience</h1>
        </div>
        <div className="experience-section--cards">
          <ExperienceCard
            accentColor="rgba(218, 40, 84, 0.829)"
            chips="Flutter, Github, Adobe XD, Asana, ReactJs, JavaScript, ExpressJs"
          />
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
