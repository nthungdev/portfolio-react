import React, { Component } from "react";
import "./ExperienceCard.css";
import FlatButton from "../FlatButton/FlatButton";
import Chip from "../Chip/Chip";

class ExperienceCard extends Component {
  render() {
    const chipNames = this.props.chips.split(",");
    var chips = [];
    chipNames.forEach((item, index) => {
      chips.push(
        <div key={index} className="experience-card--body-button-chip">
          <Chip
            title={item.trim()}
            color={this.props.accentColor}
            backgroundColor={this.props.accentColor}
          />
        </div>
      );
    });

    return (
      <div className="experience-card">
        <div className="experience-card--header">
          <p>Coding Hub</p>
        </div>
        <div className="experience-card--body">
          <div className="experience-card--body-subheader">
            <div className="experience-card--body-subheader-role">
              <p>Software Developer</p>
            </div>
            <div className="experience-card--body-subheader-time">
              <p>Sep 2018 - Present</p>
            </div>
          </div>
          <div className="experience-card--body-description">
            <p>• Sed sagittis eros in libero porta molestie.</p>
            <p>• Suspendisse mollis tellus non blandit vulputate.</p>
            <p>
              • Curabitur a nulla sollicitudin, congue felis a, lacinia arcu.
            </p>
          </div>
          <div className="experience-card--body-button-wrapper">
            <FlatButton
              title="More"
              reverse={true}
              color={this.props.accentColor}
            />
          </div>
          <hr />
          <div className="experience-card--body-button-chips">{chips}</div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
