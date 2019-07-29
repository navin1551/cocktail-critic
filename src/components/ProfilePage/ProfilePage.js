import React from "react";
import config from "../../config";
import MyReview from "../MyReview/MyReview";
import TokenService from "../../services/token-service";
import CocktailContext from "../../CocktailContext";
import "./ProfilePage.css";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    let user = TokenService.getUserId();

    fetch(`${config.API_ENDPOINT}/reviews/myreviews/8`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(userReviews => {
        this.setState({
          reviews: userReviews
        });
      })
      .catch(err => console.error({ err }));
  }

  static contextType = CocktailContext;

  render() {
    let myReviewsList = this.state.reviews.map(review => {
      return (
        <MyReview
          name={review.name}
          image={review.image}
          comment={review.comment}
          rating={review.rating}
          date={review.date_created}
        />
      );
    });
    return (
      <section>
        <h3 id="my-reviews-title">Your Posted Reviews</h3>
        <div className="my-reviews-list">
          <ul>{myReviewsList}</ul>
        </div>
      </section>
    );
  }
}
