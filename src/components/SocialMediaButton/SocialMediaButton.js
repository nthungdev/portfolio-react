import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SocialMediaButton.css";

class SocialMediaButton extends Component {
  render() {
    return (
      <a
        className="social-media-button"
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        href={this.props.href}
      >
        <img className="social-media-img" src={this.props.src} />
      </a>
    );
  }
}

SocialMediaButton.defaultProps = {
  isDisabled: false
};

SocialMediaButton.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default SocialMediaButton;
