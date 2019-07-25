import React from "react";
import "./Review.css";

export default class Review extends React.Component {
  render() {
    return (
      <li className="user-review-list-items">
        <p>{this.props.name}</p>
        <img
          src={this.props.image}
          alt="reviewed drink pictures"
          className="reviewed-drink-pics"
        />
        <br />
        <span>{this.props.comment}</span>
        <br />
        <br />
        <span>Rating: {this.props.rating}</span>
      </li>
    );
  }
}
