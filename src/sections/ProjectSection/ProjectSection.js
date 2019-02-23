import React, { Component } from "react";
import "./ProjectSection.css";

import Slideshow from "../../components/Slideshow/Slideshow";

class ProjectSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-section">
        <div className="project-section-title">
          <h1>Top Projects</h1>
        </div>
        <div className="project-section-slideshow">
          <Slideshow />
        </div>
      </div>
    );
  }
}

export default ProjectSection;
