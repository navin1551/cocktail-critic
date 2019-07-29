import React from "react";
import StarRating from "../StarRating/StarRating";
import { format } from "date-fns";
import "./MyReview.css";

export default class MyReview extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <li className="my-review-list-items">
        <p id="my-review-drink-name">{this.props.name}</p>
        <img
          src={this.props.image}
          alt="my review drink images"
          className="my-review-drink-pics"
        />
        <br />
        <span id="my-review-drink-comment">{this.props.comment}</span>
        <br />
        <br />
        <StarRating value={this.props.rating} />
        <div className="my-review-date-area">
          <span>{format(date, "MM/DD/YYYY")}</span>
        </div>
      </li>
    );
  }
}
