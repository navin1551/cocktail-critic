import React from "react";
import "./Search.css";

export default class Search extends React.Component {
  state = {
    searchTerm: ""
  };

  submitSearchHandle = e => {
    e.preventDefault();
    let search = this.state.searchTerm;
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log({ error });
      });
  };

  inputChangeHandle = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h3 className="search-title">Search and review cocktails!</h3>
        <form onSubmit={this.submitSearchHandle} className="search-form">
          <input
            onChange={this.inputChangeHandle}
            type="text"
            id="search-input"
            ref="searchInput"
          />
          <br />
          <button type="submit" id="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}
