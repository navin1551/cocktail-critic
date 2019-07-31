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
          <span title="logout">
            <i className="fa fa-sign-out-alt" />
          </span>
        </Link>
      </div>
    );
  }

  renderRegisterLink() {
    return (
      <div>
        <Link to="/register" className="nav-link" id="register-link">
          <span id="register-span" title="register">
            Register
            <i className="fa fa-user-plus" />
          </span>
        </Link>
      </div>
    );
  }

  renderSearchLink() {
    return (
      <Link to="/search" className="nav-link">
        <span id="search-icon" title="search">
          <i className="fa fa-search" />
        </span>
      </Link>
    );
  }

  renderProfilePageLink() {
    return (
      <Link to="/profile-page" className="nav-link">
        <span title="my-profile">
          <i className="fa fa-user-circle" />
        </span>
      </Link>
    );
  }

  render() {
    return (
      <nav className="nav-bar-area" role="navigation">
        {TokenService.hasAuthToken() ? this.renderProfilePageLink() : null}
        {TokenService.hasAuthToken() ? this.renderSearchLink() : null}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderRegisterLink()}
      </nav>
    );
  }
}
