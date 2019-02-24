import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MoreButton.css";

class MoreButton extends Component {
  render() {
    return (
      <a
        className="more-button"
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        href={this.props.href}
      >
        {this.props.text}
      </a>
    );
  }
}

MoreButton.defaultProps = {
  isDisabled: false
};

MoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default MoreButton;
