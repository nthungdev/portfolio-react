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
      navBarHeight: "",
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

  componentDidMount() {}

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

  openSideNav = () => {
    this.setState({
      navBarHeight: document.getElementById("nav-bar").scrollHeight + "px"
    });
    document.getElementById("nav-bar--button-bar").style.width = "75vw";
    document.getElementById("nav-bar--button-bar-blackout").style.width =
      "30vw";
  };

  closeSideNav = () => {
    document.getElementById("nav-bar--button-bar").style.width = "0px";
    document.getElementById("nav-bar--button-bar-blackout").style.width = "0px";
  };

  onClick = () => {
    this.closeSideNav();
  };

  render() {
    return (
      <nav id="nav-bar" className="nav-bar">
        <div className="nav-bar--logo-wrapper">
          <img src={PageLogo} alt="Logo of the page" />
        </div>
        <div className="nav-bar--hamburger-wrapper">
          <img
            onClick={this.openSideNav}
            src={Hamburger}
            alt="Side bar toggler"
          />
        </div>

        <div
          id="nav-bar--button-bar-blackout"
          className="nav-bar--button-bar-blackout"
          onClick={this.closeSideNav}
        />

        <div id="nav-bar--button-bar" className="nav-bar--button-bar">
          <div
            className="nav-bar--close"
            style={{ height: this.state.navBarHeight }}
          >
            <img alt="close button" onClick={this.closeSideNav} src={Close} />
          </div>

          <div className="nav-bar--button-bar-button-wrapper">
            {this.state.buttons.map(button => (
              <div
                className="nav-bar--nav-button"
                key={this.state.buttons.indexOf(button)}
              >
                <NavButton
                  padding="50px var(--side-margin)"
                  className={button.className}
                  text={button.text}
                  href={button.href}
                  isDisabled={button.isDisabled}
                  onMouseOver={() => this.onMouseOver(button)}
                  onMouseOut={() => this.onMouseOut(button)}
                  onClick={this.onClick}
                />
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
