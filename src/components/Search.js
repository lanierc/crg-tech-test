import React from "react";
import bg from "../assets/bg.jpg";

class Search extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <p>
            Displaying results 1-{this.props.searchResults.length} for&nbsp;
            {this.props.airport}
          </p>
          <div className="search-results">
            {this.props.searchResults.map((result, index) => {
              return (
                <div className="result" key={index}>
                  <h3>
                    <span>{result.name}</span> or similar
                  </h3>
                  <div className="result-container">
                    <div className="vehicle-image">
                      <img src={bg} alt={`${result.name} or similar`} />
                    </div>
                    <div className="book-vehicle">
                      <button>Book now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default Search;
