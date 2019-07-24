import React from "react";
import "./Register.css";

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-area">
        <h3>Sign up to start rating your favorite cocktails now!</h3>
        <form className="register-form">
          <label htmlFor="first-name" id="first-name-label">
            First Name
          </label>
          <br />
          <input type="text" id="first-name-input" />
          <br />
          <label htmlFor="last-name" id="last-name-label">
            Last Name
          </label>
          <br />
          <input type="text" id="last-name-input" />
          <br />
          <label htmlFor="email" id="register-email-label">
            Email
          </label>
          <br />
          <input type="email" id="register-email-input" />
          <br />
          <label htmlFor="password" id="register-password-label">
            Password
          </label>
          <br />
          <input type="password" id="register-password-input" />
          <br />
          <button id="create-account-button">Create Account</button>
          <br />
          <p>*All fields are required</p>
          <p>*Password must be between 8 and 72 characters long</p>
          <p>*Password cannot begin or end with empty spaces</p>
          <p>
            *Password must have atleast 1 uppercase, 1 lowercase, 1 number and 1
            special character
          </p>
        </form>
      </div>
    );
  }
}
