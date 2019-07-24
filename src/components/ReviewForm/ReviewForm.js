import React from "react";
import "./ReviewForm.css";

export default class ReviewForm extends React.Component {
  render() {
    return (
      <form className="review-form">
        <p>Add Review</p>
        <span>How did you like it?</span>
        <br />
        <textarea />
      </form>
    );
  }
}
