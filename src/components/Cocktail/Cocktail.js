import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./Cocktail.css";

export default class Cocktail extends React.Component {
  render() {
    return (
      <li className="drink-list-items">
        <p id="cocktail-search-name">{this.props.name}</p>
        <img
          src={this.props.image}
          alt="drink pictures"
          className="drink-pics"
        />
        <br />
        <div className="cocktail-search-ingredients">
          <span id="search-ingredients">Ingredients:</span>
          <br />
          <span>{this.props.ingredient1}</span>
          <br />
          <span>{this.props.ingredient2}</span>
          <br />
          <span>{this.props.ingredient3}</span>
          <br />
          <span>{this.props.ingredient4}</span>
          <br />
          <span>{this.props.ingredient5}</span>
          <br />
          <span>{this.props.ingredient6}</span>
        </div>
        <div>
          <span id="cocktail-search-category">Category:</span>
          <span>{this.props.category}</span>
        </div>
        <br />
        <ReviewForm name={this.props.name} image={this.props.image} />
      </li>
    );
  }
}
