import React, { Component } from "react";
import "./App.css";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import LandingSection from "./sections/LandingSection/LandingSection";

class App extends Component {
  render() {
    return (
      <React.Fragment className="root">
        <HeaderSection />
        <LandingSection />
      </React.Fragment>
    );
  }
}

export default App;
