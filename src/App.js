import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import vehicles from "./assets/vehicles.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    vehicles,
    searchResults: [],
    airport: "",
    name: "",
    email: "",
    phone: "",
    showMenu: false
  };

  populateResults = (airport, name, email, phone) => {
    console.log("populating results");
    const searchResults = this.state.vehicles;
    this.setState({
      airport,
      name,
      email,
      phone,
      searchResults
    });
  };

  launchMobileMenu = showMenu => {
    this.setState({
      showMenu
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar launchMobileMenu={this.launchMobileMenu} />
          {this.state.searchResults.length === 0 ? (
            <Header populateResults={this.populateResults} />
          ) : (
            <Search
              airport={this.state.airport}
              searchResults={this.state.searchResults}
            />
          )}
          <div
            className={
              this.state.showMenu
                ? `mobile-menu mobile-menu-true`
                : `mobile-menu`
            }
          >
            <ul className="mobile-menu-list">
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
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
