import React, { Component } from "react";
import "./ProjectSection.css";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

class ProjectSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-section">
        <div className="project-section--title">
          <h1>Top Projects</h1>
        </div>
        <div className="project-section--card">
          <ProjectCard
            stop1="ff547e"
            stop2="ffb199"
            image="https://www.psushuttle.com/static/media/ic_cellphone.c11ff642.png"
            title="Shuttler"
            description="Shuttler is a mobile application, Android and iOS, to help students track
             the shuttler at SUNY Plattsburgh Users can see the shuttle position in 
             real time displayed on a map."
          />
        </div>
        <div className="project-section--indicator" />
      </div>
    );
  }
}

export default ProjectSection;
