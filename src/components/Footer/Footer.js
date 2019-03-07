import React, { Component } from "react";
import "./Footer.css";
import IconButton from "../IconButton/IconButton";
import LinkedIn from "../../assets/logos/linkedin.png";
import Github from "../../assets/logos/github.svg";
import Facebook from "../../assets/logos/facebook.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--social">
          <div className="footer--social-button">
            <IconButton icon={Github} />
          </div>
          <div className="footer--social-button">
            <IconButton icon={LinkedIn} />
          </div>
          <div className="footer--social-button">
            <IconButton icon={Facebook} />
          </div>
        </div>
        <div className="footer--name">
          <p>Hung Nguyen</p>
        </div>
        <div className="footer--copyrights">
          <p>© Copyrights Reserved 2019</p>
        </div>
      </div>
    );
  }
}

export default Footer;
