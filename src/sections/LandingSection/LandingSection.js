import React, { Component } from "react";
import PhotoOfMe from "../../assets/images/small/me-square.jpg";
import "./LandingSection.css";

class LandingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingSectionHeight: ""
    };
  }

  componentDidMount() {
    // Get the remaining height of the screen excluding the nav bar
    this.setState({
      landingSectionHeight:
        "calc(100vh - " +
        document.getElementById("nav-bar").scrollHeight +
        "px)"
    });
  }

  render() {
    console.log(this.state.landingSectionHeight);
    return (
      <main
        className="landing-section"
        style={
          this.state.landingSectionHeight
            ? { minHeight: this.state.landingSectionHeight }
            : null
        }
      >
        <section className="landing-section--greeting">
          <div className="landing-section--title-wrapper">
            <h1 className="landing-section--title">I'm Hung,</h1>
          </div>
          <div className="landing-section--subtitle">
            <p>
              a mobile and web developer from Saigon, Vietnam. I love crafting
              softwares and taking photos.
            </p>
          </div>
        </section>
        <aside className="landing-section--photo-wrapper">
          <img
            className="landing-section--photo"
            src={PhotoOfMe}
            alt="Hung Nguyen"
          />
        </aside>
      </main>
    );
  }
}

export default LandingSection;
