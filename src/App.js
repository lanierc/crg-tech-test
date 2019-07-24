import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
    phone: ""
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

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {this.state.searchResults.length === 0 ? (
            <Header populateResults={this.populateResults} />
          ) : (
            <Search
              airport={this.state.airport}
              searchResults={this.state.searchResults}
            />
          )}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
