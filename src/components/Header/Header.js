import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-area">
        <Link to="/posted-reviews">
          <h1 id="header">Cocktail Critic</h1>
        </Link>
      </header>
    );
  }
}
