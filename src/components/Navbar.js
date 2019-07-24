import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";

class Navbar extends React.Component {
  state = {
    showMenu: false
  };

  displayMenu = e => {
    e.preventDefault();
    let showMenu = this.state.showMenu;
    showMenu = !showMenu;

    this.setState({
      showMenu
    });

    this.props.launchMobileMenu(showMenu);
  };

  render() {
    return (
      <Router>
        <div className="navbar">
          <div className="container grid-container">
            <div className="logo">
              <img src={logo} alt="Car Rental Gateway" />
            </div>
            <nav>
              <ul className="main-menu">
                <li className="mobile-menu-button">
                  <a href="#" onClick={this.displayMenu}>
                    <img src={menu} alt="menu" />
                  </a>
                </li>
                <li className="first-menu-item">
                  <Link to="#">
                    <a>Menu 1</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#">
                    <a>
                      Menu 2 <span>▼</span>
                    </a>
                  </Link>{" "}
                  <ul className="sub-menu">
                    <li>
                      <Link to="#">
                        <a>
                          <span>Sub-menu</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <a>
                          <span>Sub-menu</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <a>
                          <span>Sub-menu</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="#">
                    <a>Hover</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;
