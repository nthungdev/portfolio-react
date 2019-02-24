import React, { Component } from "react";
import "./Slideshow.css";
import GithubLogo from "../../assets/logos/github.svg";
import MoreButton from "../MoreButton/MoreButton";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";

class Slideshow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slideshow">
        <div className="slideshow-indicator" />
        <div className="slideshow-back" />
        <div className="slideshow-next" />
        <div className="slideshow-viewer-wrapper">
          <div className="slideshow-viewer">
            <div className="slideshow-viewer-left-panel" />
            <div className="slideshow-viewer-right-panel">
              <div className="slideshow-viewer-right-panel-title">
                <h2>Shuttler</h2>
              </div>
              <div className="slideshow-viewer-right-panel-body">
                <p className="slideshow-viewer-right-panel-body-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat."
                </p>
              </div>
              <div className="slideshow-viewer-right-panel-button-bar">
                <MoreButton
                  className="slideshow-viewer-right-panel-more-button"
                  text="More"
                />
                <div className="slideshow-viewer-right-panel-social-buttons">
                  <SocialMediaButton src={GithubLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
