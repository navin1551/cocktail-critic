import React from "react";
import StarRating from "../StarRating/StarRating";
import { format } from "date-fns";
import "./Review.css";

export default class Review extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <li className="user-review-list-items">
        <p id="review-drink-name">{this.props.name}</p>
        <img
          src={this.props.image}
          alt="reviewed drink pictures"
          className="reviewed-drink-pics"
        />
        <br />
        <span id="review-drink-comment">{this.props.comment}</span>
        <br />
        <br />
        <StarRating value={this.props.rating} />
        <div className="user-date-review-info">
          <span>posted by: {this.props.user}</span>
          <span>{format(date, "MM/DD/YYYY")}</span>
        </div>
      </li>
    );
  }
}
