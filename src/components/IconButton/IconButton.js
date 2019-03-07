import React, { Component } from "react";
import "./IconButton.css";

class IconButton extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank">
        <div className="icon-button" onClick={this.props.onClick}>
          <img
            alt="icon button"
            className="icon-button--icon"
            src={this.props.icon}
            style={{
              height: this.props.height,
              width: this.props.width
            }}
          />
        </div>
      </a>
    );
  }
}

export default IconButton;
