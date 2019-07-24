import React from "react";
import "./ReviewForm.css";

export default class ReviewForm extends React.Component {
  render() {
    return (
      <form className="review-form">
        <p>Add Review</p>
        <span>How did you like it?</span>
        <br />
        <textarea type="text" />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <select type="select" id="rating-select" aria-label="Rate your drink">
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
