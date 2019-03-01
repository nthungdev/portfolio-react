import React, { Component } from "react";
import "./ProjectSection.css";
import DotIndicator from "../../components/DotIndicator/DotIndicator";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

class ProjectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  buildProject1 = () => {
    return (
      <ProjectCard
        stop1="ff547e"
        stop2="ffb199"
        image="https://www.psushuttle.com/static/media/ic_cellphone.c11ff642.png"
        title="Shuttler"
        description="Shuttler is a mobile application, Android and iOS, to help students track
       the shuttler at SUNY Plattsburgh Users can see the shuttle position in 
       real time displayed on a map."
      />
    );
  };

  buildProject2 = () => {
    return (
      <ProjectCard
        stop1="ff547e"
        stop2="ffb199"
        image="https://pay.google.com/about/static/images/social/knowledge_graph_logo.png"
        title="Google Pay"
        description="Google Pay is a digital wallet platform and online payment system developed by 
        Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to 
        make payments with Android phones, tablets or watches."
      />
    );
  };

  buildProject3 = () => {
    return (
      <ProjectCard
        stop1="ff547e"
        stop2="ffb199"
        image="https://www.psushuttle.com/static/media/ic_cellphone.c11ff642.png"
        title="Shuttler"
        description="Shuttler is a mobile application, Android and iOS, to help students track
       the shuttler at SUNY Plattsburgh Users can see the shuttle position in 
       real time displayed on a map."
      />
    );
  };

  handleIndicatorChanged = index => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const project1 = this.buildProject1();
    const project2 = this.buildProject2();
    const project3 = this.buildProject3();
    var projects = [];
    projects.push(project1);
    projects.push(project2);
    projects.push(project3);
    return (
      <div className="project-section">
        <div className="project-section--title">
          <h1>Top Projects</h1>
        </div>
        <div className="project-section--card">
          {projects[this.state.activeIndex]}
        </div>
        <div className="project-section--indicator">
          <DotIndicator
            count="3"
            activeIndex={this.state.activeIndex}
            onChange={this.handleIndicatorChanged}
          />
        </div>
      </div>
    );
  }
}

export default ProjectSection;
