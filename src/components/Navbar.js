import React from "react";
import logo from "../assets/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="grid-container">
          <div className="logo">
            <img src={logo} alt="Car Rental Gateway" />
          </div>
          <nav>
            <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
