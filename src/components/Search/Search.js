import React from "react";
import Cocktail from "../Cocktail/Cocktail";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: []
    };
  }

  submitSearchHandle = e => {
    e.preventDefault();
    let search = this.state.query;
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(responseData => {
        console.log(responseData);
        this.setState({
          searchResults: responseData.drinks
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  inputChangeHandle = e => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
  };

  render() {
    let drinkResults = this.state.searchResults.map(drink => (
      <Cocktail
        name={drink.strDrink}
        key={drink.idDrink}
        ingredient1={drink.strIngredient1}
        ingredient2={drink.strIngredient2}
        ingredient3={drink.strIngredient3}
        ingredient4={drink.strIngredient4}
        ingredient5={drink.strIngredient5}
        ingredient6={drink.strIngredient6}
        image={drink.strDrinkThumb}
      />
    ));

    return (
      <section>
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
        <div className="drink-results-list">
          <ul>{drinkResults}</ul>
        </div>
      </section>
    );
  }
}
