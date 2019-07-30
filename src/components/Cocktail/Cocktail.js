import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./Cocktail.css";

export default class Cocktail extends React.Component {
  render() {
    const ingredient1 = this.props.ingredient1.length ? (
      <div>
        <span>{this.props.ingredient1}</span>
        <br />
      </div>
    ) : null;

    const ingredient4 = this.props.ingredient4.length ? (
      <span>{this.props.ingredient4}</span>
    ) : null;

    const { name, image, category } = this.props;
    return (
      <li className="drink-list-items">
        <p id="cocktail-search-name">{name}</p>
        <img src={image} alt="drink pictures" className="drink-pics" />
        <br />
        <div className="cocktail-search-ingredients">
          <span id="search-ingredients">Ingredients:</span>
          <br />
          {ingredient1}
          <span>{this.props.ingredient2}</span>
          <br />
          <span>{this.props.ingredient3}</span>
          <br />
          {ingredient4}
          <br />
          <span>{this.props.ingredient5}</span>
          <br />
          <span>{this.props.ingredient6}</span>
        </div>
        <div>
          <span id="cocktail-search-category">Category:</span>
          <span id="cocktail-category">{category}</span>
        </div>
        <br />
        <ReviewForm name={this.props.name} image={this.props.image} />
      </li>
    );
  }
}
