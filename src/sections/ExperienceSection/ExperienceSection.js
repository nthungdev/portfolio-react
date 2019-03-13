import React, { Component } from "react";
import "./ExperienceSection.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import ExperienceInfo from "../../assets/experiences.json";

class ExperienceSection extends Component {
  render() {
    var experienceCards = [];
    const experiences = ExperienceInfo.experiences;
    experiences.forEach(item => {
      console.log(item);
      experienceCards.push(
        <div
          key={experiences.indexOf(item)}
          className="experience-section--experience-card"
        >
          <ExperienceCard
            accentColor={item.color}
            chips={item.tags}
            organization={item.organization}
            position={item.position}
            description={item.description}
            organizationLogoURL={item.organizationLogoURL}
            organizationURL={item.organizationURL}
          />
        </div>
      );
    });

    return (
      <div id="experience-section" className="experience-section">
        <div className="experience-section--title">
          <h1>Experience</h1>
        </div>
        <div className="experience-section--cards">
          {experienceCards}
          {/* <ExperienceCard
            accentColor="rgba(218, 40, 84, 0.829)"
            chips="Flutter, Github, Adobe XD, Asana, ReactJs, JavaScript, ExpressJs"
          /> */}
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
