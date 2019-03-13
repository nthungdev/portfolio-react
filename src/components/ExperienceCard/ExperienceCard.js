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

    var descriptions = [];
    this.props.description.forEach(item => {
      descriptions.push(<p>&middot; {item}</p>);
    });

    return (
      <div className="experience-card">
        <div
          className="experience-card--header"
          style={{ backgroundColor: this.props.accentColor }}
        >
          <p>{this.props.organization}</p>
        </div>
        <div className="experience-card--body">
          <div className="experience-card--body-subheader">
            <div className="experience-card--body-subheader-role">
              <p>{this.props.position}</p>
            </div>
            <div className="experience-card--body-subheader-time">
              <p>{this.props.duration}</p>
            </div>
          </div>
          <div className="experience-card--body-description">
            {descriptions}
          </div>
          <div className="experience-card--body-button-wrapper">
            <FlatButton
              title="More"
              reverse={true}
              color={this.props.accentColor}
              href={this.props.organizationURL}
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
