import React from "react";
import "./Review.css";

export default class Review extends React.Component {
  render() {
    return (
      <li className="user-review-list-items">
        <p>{this.props.name}</p>
        <br />
        <span>{this.props.comment}</span>
      </li>
    );
  }
}
