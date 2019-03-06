import React, { Component } from "react";
import "./App.css";
import LandingSection from "./sections/LandingSection/LandingSection";
import NavBar from "./components/NavBar/NavBar";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ContactSection from "./sections/ContactSeciton/ContactSection";

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="content">
          <NavBar />
          <LandingSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    );
  }
}

export default App;
