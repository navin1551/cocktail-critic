import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./NavBar.css";

export default class NavBar extends React.Component {
  handleLogOutClick = () => {
    TokenService.clearAuthToken();
    window.location = "/";
  };

  renderLogoutLink() {
    return (
      <div>
        <Link to="/" onClick={this.handleLogOutClick}>
          <p>Logout</p>
        </Link>
      </div>
    );
  }

  renderRegisterLink() {
    return (
      <div>
        <Link to="/register">
          <p id="register">Register</p>
        </Link>
      </div>
    );
  }

  renderSearchLink() {
    return (
      <Link to="/search">
        <p>Search</p>
      </Link>
    );
  }
  render() {
    return (
      <nav className="nav-bar-area">
        {TokenService.hasAuthToken() ? this.renderSearchLink() : null}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderRegisterLink()}
      </nav>
    );
  }
}
