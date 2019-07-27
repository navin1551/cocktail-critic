import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./NavBar.css";

export default class NavBar extends React.Component {
  renderLogoutLink() {
    return (
      <div>
        <Link to="/">
          <p>Logout</p>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div>
        <Link to="/">
          <p>Login</p>
        </Link>
      </div>
    );
  }
  render() {
    return (
      <nav className="nav-bar-area">
        <Link to="/register">
          <p id="register">Register</p>
        </Link>
        <Link to="/search">
          <p>Search</p>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
