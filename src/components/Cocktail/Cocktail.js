import React from "react";

export default class Cocktail extends React.Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
      </li>
    );
  }
}
