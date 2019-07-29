import React from "react";
import StarRating from "../StarRating/StarRating";
import { format } from "date-fns";
import "./Review.css";

export default class Review extends React.Component {
  render() {
    const { date, name, image, comment, rating, user } = this.props;
    return (
      <li className="user-review-list-items">
        <p id="review-drink-name">{name}</p>
        <img
          src={image}
          alt="reviewed drink pictures"
          className="reviewed-drink-pics"
        />
        <br />
        <span id="review-drink-comment">{comment}</span>
        <br />
        <br />
        <StarRating value={rating} />
        <div className="user-date-review-info">
          <span>{user}</span>
          <span>{format(date, "MM/DD/YYYY")}</span>
        </div>
      </li>
    );
  }
}
