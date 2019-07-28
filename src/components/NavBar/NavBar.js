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
        <Link to="/" onClick={this.handleLogOutClick} className="nav-link">
          <p>Logout</p>
        </Link>
      </div>
    );
  }

  renderRegisterLink() {
    return (
      <div>
        <Link to="/register" className="nav-link">
          <p id="register">Register</p>
        </Link>
      </div>
    );
  }

  renderSearchLink() {
    return (
      <Link to="/search" className="nav-link">
        <p>Search</p>
      </Link>
    );
  }

  renderProfilePageLink() {
    return (
      <Link to="/profile-page" className="nav-link">
        <p>Profile</p>
      </Link>
    );
  }

  render() {
    return (
      <nav className="nav-bar-area">
        {TokenService.hasAuthToken() ? this.renderProfilePageLink() : null}
        {TokenService.hasAuthToken() ? this.renderSearchLink() : null}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderRegisterLink()}
      </nav>
    );
  }
}
