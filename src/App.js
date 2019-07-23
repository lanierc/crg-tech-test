import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import vehicles from "./assets/vehicles.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";

class App extends React.Component {
  state = {
    vehicles,
    searchResults: []
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {this.state.searchResults.length === 0 ? <Header /> : <Search />}
        </div>
      </Router>
    );
  }
}

export default App;
