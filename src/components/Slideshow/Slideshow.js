import React, { Component } from "react";
import "./Slideshow.css";

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
        <div className="slideshow-viewer">
          <div className="slideshow-viewer-left-panel" />
          <div className="slideshow-viewer-right-panel">
            <div className="slideshow-viewer-right-panel-title" />
            <div className="slideshow-viewer-right-panel-body" />
            <div className="slideshow-viewer-right-panel-button-bar">
              <div className="slideshow-viewer-right-panel-button-bar-button" />
              <div className="social-button" />
              <div className="social-button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
