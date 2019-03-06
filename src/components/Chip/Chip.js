import React, { Component } from "react";
import "./Chip.css";

class Chip extends Component {
  render() {
    return (
      <div
        className="chip-wrapper"
        style={{
          fontSize: this.props.fontSize,
          color: this.props.color
        }}
      >
        <div
          className="chip"
          onClick={this.props.onClick}
          style={{
            backgroundColor: this.props.backgroundColor
          }}
        >
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Chip;
