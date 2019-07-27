import React from "react";
import CocktailContext from "../../CocktailContext";
import config from "../../config";
import TokenService from "../../services/token-service";
import "./ReviewForm.css";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      rating: "",
      name: this.props.name,
      image: this.props.image,
      date_created: new Date()
    };
  }

  static contextType = CocktailContext;

  commentChangeHandle = comment => {
    this.setState({
      comment: comment
    });
  };

  ratingChangeHandle = rating => {
    this.setState({
      rating: rating
    });
  };

  reviewSubmitHandle = e => {
    e.preventDefault();
    let { id, comment, rating, name, image, date_created } = this.state;
    rating = parseInt(rating);
    const newReview = { id, comment, rating, name, image, date_created };

    fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.context.addReview(data);
        this.setState({
          name: "",
          comment: "",
          rating: "",
          image: "",
          date_created: new Date()
        });
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    return (
      <form className="review-form" onSubmit={this.reviewSubmitHandle}>
        <p>Add Review</p>
        <span>How did you like it?</span>
        <br />
        <textarea
          type="text"
          onChange={e => this.commentChangeHandle(e.target.value)}
        />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <select
          type="select"
          id="rating-select"
          aria-label="Rate your drink"
          onChange={e => this.ratingChangeHandle(e.target.value)}
        >
          <option>How many stars?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button type="submit" id="review-submit-button">
          Submit
        </button>
      </form>
    );
  }
}
