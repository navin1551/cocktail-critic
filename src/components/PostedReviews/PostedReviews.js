import React from "react";
import CocktailContext from "../../CocktailContext";

export default class PostedReviews extends React.Component {
  static contextType = CocktailContext;

  render() {
    return (
      <section>
        <p>Browse Posted Reviews</p>
      </section>
    );
  }
}
