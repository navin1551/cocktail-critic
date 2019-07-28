import React from "react";
import AuthApiService from "../../services/auth-api-service";
import "./Register.css";

export default class Register extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  registerSubmitHandle = e => {
    e.preventDefault();
    const first_name = e.target.children[2];
    const last_name = e.target.children[6];
    const email = e.target.children[10];
    const user_name = e.target.children[14];
    const password = e.target.children[18];

    this.setState({ error: null });

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value
    })
      .then(user => {
        first_name.value = "";
        last_name.value = "";
        email.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
        window.location = "/";
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="register-area">
        <h3 id="register-title">
          Sign up to start rating your favorite cocktails now!
        </h3>
        <form
          className="register-form"
          onSubmit={e => this.registerSubmitHandle(e)}
        >
          <label htmlFor="first-name" id="first-name-label">
            First Name:
          </label>
          <br />
          <input type="text" id="first-name-input" />
          <br />
          <label htmlFor="last-name" id="last-name-label">
            Last Name:
          </label>
          <br />
          <input type="text" id="last-name-input" />
          <br />
          <label htmlFor="email" id="register-email-label">
            Email:
          </label>
          <br />
          <input type="email" id="register-email-input" />
          <br />
          <label htmlFor="user-name" id="user-name-label">
            User Name:
          </label>
          <br />
          <input type="user-name" id="user-name-input" />
          <br />
          <label htmlFor="password" id="register-password-label">
            Password:
          </label>
          <br />
          <input type="password" id="register-password-input" />
          <br />
          <button id="create-account-button">Create Account</button>
          <br />
          <div className="password-restrictions">
            <p>*All fields are required</p>
            <p>*Password must be between 8 and 72 characters long</p>
            <p>*Password cannot begin or end with empty spaces</p>
            <p>
              *Password must have atleast 1 uppercase, 1 lowercase, 1 number and
              1 special character
            </p>
          </div>
        </form>
      </div>
    );
  }
}
