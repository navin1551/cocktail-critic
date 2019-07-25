import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar-area">
        <Link to="/register">
          <p id="register">Register</p>
        </Link>
        <Link to="/search">
          <p>Search</p>
        </Link>
        <Link to="/">
          <p>Logout</p>
        </Link>
      </nav>
    );
  }
}
