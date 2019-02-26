import React, { Component } from "react";
import PageLogo from "../../assets/logos/logo.png";
import Hamburger from "../../assets/images/hamburger.svg";
import Close from "../../assets/images/close.svg";
import NavButton from "../../components/NavButton/NavButton";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      buttons: [
        {
          text: "Home",
          className: "nav-button",
          isDisabled: false,
          href: "#"
        },
        {
          text: "Experience",
          className: "nav-button",
          disabled: false,
          href: "#"
        },
        {
          text: "Photography",
          className: "nav-button",
          disabled: false,
          href: "#"
        },
        {
          text: "Contact",
          className: "nav-button",
          disabled: false,
          href: "#"
        }
      ]
    };
    this.onHover = this.onMouseOver.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onMouseOver(button) {
    const buttons = [...this.state.buttons];
    buttons.forEach(item => {
      if (item.text !== button.text) {
        item.isDisabled = true;
      }
    });
    // });
    this.setState({
      buttons: buttons
    });
  }

  onMouseOut(button) {
    const buttons = [...this.state.buttons];
    buttons.forEach(item => {
      item.isDisabled = false;
    });
    this.setState({
      buttons: buttons
    });
  }

  onClick() {}

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar--logo-wrapper">
          <img src={PageLogo} alt="Logo of the page" />
        </div>
        <div className="nav-bar--hamburger-wrapper">
          <img src={Hamburger} />
        </div>
        <div className="nav-bar--button-bar">
          <div className="nav-bar--close">
            <img src={Close} />
          </div>
          {this.state.buttons.map(button => (
            <NavButton
              className={button.className}
              text={button.text}
              href={button.href}
              isDisabled={button.isDisabled}
              onMouseOver={() => this.onMouseOver(button)}
              onMouseOut={() => this.onMouseOut(button)}
              onClick={this.onClick}
            />
          ))}
        </div>
      </nav>
    );
  }
}

export default NavBar;
