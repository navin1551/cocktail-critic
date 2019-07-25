import React from "react";
import "./StarRating.css";

export default class StarRating extends React.Component {
  render() {
    const stars = [0, 0, 0, 0, 0].map((_, i) =>
      i < this.props.value ? (
        <span key={i}>
          <i className="fas fa-star" />
        </span>
      ) : (
        <span key={i}>
          <i className="far fa-star" />
        </span>
      )
    );
    return <div className="star-rating">{stars}</div>;
  }
}
