import React from "react";
import "./Search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <h3 className="search-title">Search and review cocktails!</h3>
        <form className="search-form">
          <input type="text" id="search-input" />
          <br />
          <button id="search-button">Search</button>
        </form>
      </div>
    );
  }
}
