import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./Cocktail.css";

export default class Cocktail extends React.Component {
  render() {
    return (
      <li className="drink-list-items">
        <p>{this.props.name}</p>
        <img
          src={this.props.image}
          alt="drink pictures"
          className="drink-pics"
        />
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
        <br />
        <ReviewForm name={this.props.name} image={this.props.image} />
      </li>
    );
  }
}
