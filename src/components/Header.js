import React from "react";

class Header extends React.Component {
  state = {
    airport: "",
    name: "",
    email: "",
    phone: "",
    loading: false
  };

  changeState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleForm = async e => {
    e.preventDefault();
    console.log("form submitted");
    await this.setState({
      loading: true
    });
  };

  render() {
    return (
      <header>
        <div className="container grid-container">
          <div className="searchbox">
            <form onSubmit={this.handleForm}>
              <fieldset aria-busy={this.state.loading}>
                {this.state.loading && <p className="loading">Loading...</p>}
                <label htmlFor="airport">
                  <p>Pick-up location:</p>
                  <input
                    type="text"
                    name="airport"
                    placeholder="Placeholder"
                    onChange={this.changeState}
                    required
                    value={this.state.airport}
                  />
                </label>
                <label htmlFor="name">
                  <p>Name:</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Placeholder"
                    onChange={this.changeState}
                    required
                    value={this.state.name}
                  />
                </label>
                <label htmlFor="email">
                  <p>E-mail:</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Placeholder"
                    onChange={this.changeState}
                    required
                    value={this.state.email}
                  />
                </label>
                <label htmlFor="phone">
                  <p>Phone:</p>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Placeholder"
                    onChange={this.changeState}
                    required
                    value={this.state.phone}
                  />
                </label>
                <input type="submit" value="Search" />
              </fieldset>
            </form>
          </div>
          <div className="title">
            <h1>Best deals!</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
