import React from "react";
import CocktailContext from "../../CocktailContext";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  static contextType = CocktailContext;

  render() {
    return (
      <section>
        <div>
          <h3>Your Posted Reviews:</h3>
        </div>
      </section>
    );
  }
}
