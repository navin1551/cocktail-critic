import React from "react";
import CocktailContext from "../../CocktailContext";
import Review from "../Review/Review";
import "./PostedReviews.css";

export default class PostedReviews extends React.Component {
  static contextType = CocktailContext;

  render() {
    let postedReviews = this.context.reviews.map(review => (
      <Review
        name={review.name}
        comment={review.comment}
        key={review.id}
        rating={review.rating}
        image={review.image}
      />
    ));
    return (
      <section>
        <div className="posted-reviews-list">
          <ul>{postedReviews}</ul>
        </div>
      </section>
    );
  }
}