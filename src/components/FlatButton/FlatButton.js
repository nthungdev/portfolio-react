import React, { Component } from "react";
import "./FlatButton.css";

class FlatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverse: this.props.reverse ? true : false
    };
  }

  onHover = event => {
    this.setState(
      {
        reverse: !this.state.reverse
      },
      () => console.log(this.state.reverse)
    );
  };

  render() {
    return (
      <div
        onMouseOver={this.onHover}
        onMouseOut={this.onHover}
        className="flat-button-wrapper"
        style={this.props.fontSize ? { fontSize: this.props.fontSize } : null}
      >
        <button
          className={this.state.reverse ? "flat-button-reverse" : "flat-button"}
          onClick={this.props.onClick}
          style={{
            backgroundColor: this.state.reverse ? "white" : this.props.color,
            borderColor: this.props.color,
            color: this.state.reverse ? this.props.color : "white",
            boxShadow: this.state.reverse
              ? `3px 3px 20px 0 #${this.props.color}`
              : "none"
          }}
        >
          <p>{this.props.title}</p>
        </button>
      </div>
    );
  }
}

export default FlatButton;
