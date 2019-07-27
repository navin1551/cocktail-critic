import React from "react";
import "./SignInForm.css";

export default class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form>
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <br />
          <input type="email" id="email-input" />
          <br />
          <label htmlFor="password" id="password-label">
            Password
          </label>
          <br />
          <input type="password" id="password-input" />
          <br />
          <button id="sign-in-button">Sign In</button>
        </form>
      </div>
    );
  }
}
