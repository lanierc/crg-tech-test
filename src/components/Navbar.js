import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <div className="grid-container">
            <div className="logo">
              <img src={logo} alt="Car Rental Gateway" />
            </div>
            <nav>
              <ul className="main-menu">
                <li>
                  <Link to="#">
                    <a>Menu 1</a>
                  </Link>
                </li>
                <li>
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
                <li>
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
