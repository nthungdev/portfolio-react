import React, { Component } from "react";
import "./IconButton.css";

class IconButton extends Component {
  render() {
    return (
      <a className="icon-button" onClick={this.props.onClick}>
        <img
          className="icon-button--icon"
          src={this.props.icon}
          style={{
            height: this.props.height,
            width: this.props.width
          }}
        />
      </a>
    );
  }
}

export default IconButton;
