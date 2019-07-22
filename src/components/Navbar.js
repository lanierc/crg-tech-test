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
            <p>This is the nav.</p>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
