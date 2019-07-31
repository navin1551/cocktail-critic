import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-area" role="banner">
        <Link className="header" to="/posted-reviews">
          <h1 className="header">Cocktail Critic</h1>
        </Link>
      </header>
    );
  }
}
