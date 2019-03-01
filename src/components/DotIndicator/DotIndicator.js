import React, { Component } from "react";
import "./DotIndicator.css";

class DotIndicator extends Component {
  createDots = () => {
    const dots = [];
    for (let i = 0; i < parseInt(this.props.count); ++i) {
      if (i === this.props.activeIndex) {
        dots.push(
          <Dot
            key={i}
            color={this.props.color}
            active={true}
            onClick={() => {
              this.props.onChange(i);
            }}
          />
        );
      } else {
        dots.push(
          <Dot
            key={i}
            color={this.props.color}
            onClick={() => {
              this.props.onChange(i);
            }}
          />
        );
      }
    }
    return dots;
  };

  render() {
    // console.log(this.createDots());
    return <div className="dot-indicator">{this.createDots()}</div>;
  }
}

class Dot extends Component {
  render() {
    return (
      <div
        className={
          this.props.active ? "dot-indicator--dot-active" : "dot-indicator--dot"
        }
        style={{ backgroundColor: this.props.color ? this.props.color : null }}
        onClick={this.props.onClick}
      >
        <div />
      </div>
    );
  }
}

export default DotIndicator;
