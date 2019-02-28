import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavButton.css";

class NavButton extends Component {
  render() {
    return (
      <a
        className={
          this.props.isDisabled
            ? "nav-button disabled fade-out"
            : "nav-button fade-in"
        }
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        href={this.props.href}
        style={this.props.padding ? { padding: this.props.padding } : null}
      >
        {this.props.text}
      </a>
    );
  }
}

NavButton.defaultProps = {
  isDisabled: false
};

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default NavButton;
