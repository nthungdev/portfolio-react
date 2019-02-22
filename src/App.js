import React, { Component } from "react";
import "./App.css";
import LandingSection from "./sections/LandingSection/LandingSection";

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="content">
          <LandingSection />
        </div>
      </div>
    );
  }
}

export default App;
