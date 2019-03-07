import React, { Component } from "react";
import "./ProjectSection.css";
import DotIndicator from "../../components/DotIndicator/DotIndicator";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import ProjectsInfo from "../../assets/projects.json";

class ProjectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  handleIndicatorChanged = index => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    // Parse project information from json file
    var projectCards = [];
    const projects = ProjectsInfo.projects;
    projects.forEach(item => {
      projectCards.push(
        <ProjectCard
          stop1={item.gradientColor.stop1}
          stop2={item.gradientColor.stop2}
          title={item.title}
          description={item.description}
          image={item.imageURL}
          githubURL={item.githubURL}
          projectURL={item.projectURL}
        />
      );
    });

    return (
      <div id="project-section" className="project-section">
        <div className="project-section--title">
          <h1>Top Projects</h1>
        </div>
        <div className="project-section--card">
          {projectCards[this.state.activeIndex]}
        </div>
        <div className="project-section--indicator">
          <DotIndicator
            count={projectCards.length}
            activeIndex={this.state.activeIndex}
            onChange={this.handleIndicatorChanged}
          />
        </div>
      </div>
    );
  }
}

export default ProjectSection;
