import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PhotoOfMe from "../../assets/images/small/landing-me.jpg";
import "./LandingSection.css";

class LandingSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="landing-section">
        <div className="landing-body">
          <section className="hello">
            <div className="title">
              <h1>I'm Hung,</h1>
            </div>
            <div className="subtitle">
              <h2>
                a mobile and web developer from Saigon, Vietnam. I love crafting
                softwares and enjoy photography as a hobby.
              </h2>
            </div>
          </section>
          <aside>
            <img className="photo" src={PhotoOfMe} alt="Hung Nguyen" />
          </aside>
        </div>
      </main>
    );
  }
}

export default LandingSection;
