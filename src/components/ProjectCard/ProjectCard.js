import React, { Component } from "react";
import "./ProjectCard.css";
import GithubIcon from "../../assets/logos/github.svg";
import FlatButton from "../../components/FlatButton/FlatButton";
import IconButton from "../../components/IconButton/IconButton";

import Ellipsis from "ftellipsis";

class ProjectCard extends Component {
  componentDidMount() {
    // Clamp the information paragraph
    var element = document.getElementsByClassName(
      "project-card--description-panel-information"
    )[0];
    var ellipsis = new Ellipsis(element);
    ellipsis.calc();
    ellipsis.set();
  }

  getBackgroundImage = () => {
    if (this.props.stop1 !== null && this.props.stop2 !== null) {
      return `linear-gradient(45deg, #${this.props.stop1}, #${
        this.props.stop2
      })`;
    } else {
      return `linear-gradient(45deg, #525252, #c5c5c5)`;
    }
  };

  render() {
    return (
      <div className="project-card">
        <div
          className="project-card--preview-panel"
          style={{
            backgroundImage: this.getBackgroundImage()
          }}
        >
          <div className="project-card--preview-panel-image-wrapper">
            <img
              alt="project"
              className="project-card--preview-panel-image"
              src={this.props.image}
            />
          </div>
        </div>
        <div className="project-card--description-panel">
          <div className="project-card--description-panel-title">
            <h2>{this.props.title ? this.props.title : "Untitled"}</h2>
          </div>
          <div className="project-card--description-panel-information">
            <p>
              {this.props.description
                ? this.props.description
                : "Please input description"}
            </p>
          </div>
          <div className="project-card--description-panel-button-bar">
            <div className="project-card--description-panel-button-bar-left">
              <FlatButton
                title="MORE"
                color={`#${this.props.stop1}`}
                href={this.props.projectURL}
              />
            </div>
            <div className="project-card--description-panel-button-bar-right">
              <IconButton icon={GithubIcon} href={this.props.githubURL} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
