import React, { Component } from "react";
import "./DotIndicator.css";

class DotIndicator extends Component {
  createDots = () => {
    const dots = [];
    for (let i = 0; i < parseInt(this.props.count); ++i) {
      dots.push(<Dot key={i} color={this.props.color} />);
    }
    return dots;
  };

  render() {
    console.log(this.createDots());
    return <div className="dot-indicator">{this.createDots()}</div>;
  }
}

const Dot = props => {
  return (
    <div
      className="dot-indicator--dot"
      style={{ backgroundColor: props.color ? props.color : "black" }}
    >
      <div />
    </div>
  );
};

export default DotIndicator;
