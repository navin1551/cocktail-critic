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

    const ingredient2 = this.props.ingredient2.length ? (
      <div>
        <span>{this.props.ingredient2}</span>
        <br />
      </div>
    ) : null;

    const ingredient3 = this.props.ingredient3.length ? (
      <div>
        <span>{this.props.ingredient3}</span>
        <br />
      </div>
    ) : null;

    const ingredient4 = this.props.ingredient4.length ? (
      <div>
        <span>{this.props.ingredient4}</span>
        <br />
      </div>
    ) : null;

    const ingredient5 = this.props.ingredient5.length ? (
      <div>
        <span>{this.props.ingredient5}</span>
        <br />
      </div>
    ) : null;

    const ingredient6 = this.props.ingredient6.length ? (
      <div>
        <span>{this.props.ingredient6}</span>
        <br />
      </div>
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
          {ingredient2}
          {ingredient3}
          {ingredient4}
          {ingredient5}
          {ingredient6}
        </div>
        <br />
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
