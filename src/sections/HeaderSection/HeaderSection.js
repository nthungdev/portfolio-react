import React, { Component } from "react";
import PageLogo from "../../assets/logos/logo.png";
import NavButton from "../../components/NavButton/NavButton";
import "./HeaderSection.css";

class HeaderSection extends Component {
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

  onClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div>
        <header className="header-section-primary">
          <div className="logo">
            <img src={PageLogo} alt="Logo of the page" />
          </div>
          <nav className="navbar">
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
            {/* <NavButton
              className="nav-button"
              onMouseOver={() => this.onHover(this.state.buttons.homeButton)}
              onClick={this.onClick}
              text="Home"
              href="#"
              disabled={this.state.buttons.homeButton}
            />
            <NavButton
              className="nav-button"
              text="Experience"
              href="#"
              disabled={this.state.buttons.experienceButton}
            />
            <NavButton
              className="nav-button"
              text="Photography"
              href="#"
              disabled={this.state.buttons.photographyButton}
            />
            <NavButton
              className="nav-button"
              text="Contact"
              href="https://www.google.com/"
              disabled={this.state.buttons.contactButton}
            /> */}
          </nav>
        </header>

        <h1>{this.state.isToggleOn ? "on" : "off"}</h1>
      </div>
    );
  }
}

export default HeaderSection;
