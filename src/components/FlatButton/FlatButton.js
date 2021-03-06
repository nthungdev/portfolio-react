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
    this.setState({
      reverse: !this.state.reverse
    });
  };

  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div
          onMouseOver={this.onHover}
          onMouseOut={this.onHover}
          className="flat-button-wrapper"
          style={this.props.fontSize ? { fontSize: this.props.fontSize } : null}
        >
          <button
            className={
              this.state.reverse ? "flat-button-reverse" : "flat-button"
            }
            type={this.props.type}
            onClick={this.props.onClick}
            style={{
              backgroundColor: this.state.reverse ? "white" : this.props.color,
              borderColor: this.props.color,
              color: this.state.reverse ? this.props.color : "white"
            }}
          >
            <p>{this.props.title}</p>
          </button>
        </div>
      </a>
    );
  }
}

export default FlatButton;
