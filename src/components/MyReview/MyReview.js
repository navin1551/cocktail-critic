import React from "react";
import config from "../../config";
import StarRating from "../StarRating/StarRating";
import { format } from "date-fns";
import "./MyReview.css";
import CocktailContext from "../../CocktailContext";

export default class MyReview extends React.Component {
  static contextType = CocktailContext;

  deleteReviewHandle = e => {
    e.preventDefault();
    const { id } = this.props;
    fetch(`${config.API_ENDPOINT}/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          res.json.then(error => Promise.reject(error));
          return null;
        }
      })
      .then(() => {
        this.context.deleteReview(id);
        window.location = "/profile-page";
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { date, name, image, comment, rating } = this.props;
    return (
      <li className="my-review-list-items">
        <p id="my-review-drink-name">{name}</p>
        <img
          src={image}
          alt="my review drink images"
          className="my-review-drink-pics"
        />
        <br />
        <span id="my-review-drink-comment">{comment}</span>
        <br />
        <br />
        <StarRating value={rating} />
        <div className="my-review-date-area">
          <span>{format(date, "MM/DD/YYYY")}</span>
          <button
            onClick={this.deleteReviewHandle}
            id="my-review-delete-button"
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}
