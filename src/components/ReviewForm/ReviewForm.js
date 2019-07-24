import React from "react";
import CocktailContext from "../../CocktailContext";
import "./ReviewForm.css";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      rating: "",
      name: this.props.name
    };
  }

  static contextType = CocktailContext;

  commentChangeHandle = comment => {
    this.setState({
      comments: comment
    });
  };

  ratingChangeHandle = rating => {
    this.setState({
      rating: rating
    });
  };

  reviewSubmitHandle = e => {
    e.preventDefault();
    const { id, comments, rating, name } = this.state;
    const newReview = { id, comments, rating, name };
    console.log(newReview);
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
