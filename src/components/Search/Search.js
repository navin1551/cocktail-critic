import React from "react";
import "./Search.css";

export default class Search extends React.Component {
  submitSearchHandle = e => {
    console.log(e);
    e.preventDefault();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`;

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

  render() {
    return (
      <div>
        <h3 className="search-title">Search and review cocktails!</h3>
        <form onSubmit={this.submitSearchHandle} className="search-form">
          <input type="text" id="search-input" />
          <br />
          <button id="search-button">Search</button>
        </form>
      </div>
    );
  }
}
