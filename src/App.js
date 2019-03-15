import React, { Component } from "react";
import "./App.css";
import LandingSection from "./sections/LandingSection/LandingSection";
import NavBar from "./components/NavBar/NavBar";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

import firebase from "firebase";
import { firebaseConfig } from "./secrets";
import ipify from "ipify";
import iplocation from "iplocation";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    ipify().then(ip => {
      iplocation(ip)
        .then(res => {
          var visitor = {
            ...res,
            time: Date()
          };

          firebase
            .firestore()
            .collection("visitors")
            .add(visitor)
            .then(data => {
              console.log("Successful");
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  render() {
    return (
      <div className="root">
        <div className="content">
          <NavBar />
          <LandingSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
