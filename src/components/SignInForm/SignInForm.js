import React from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./SignInForm.css";

export default class SignInForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  loginSubmitHandle = e => {
    //e.preventDefault();
    const user_name = e.target.children[1];
    const password = e.target.children[4];

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const user_name = ev.target.children[1];
    const password = ev.target.children[4];

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        window.location = "/posted-reviews";
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="user-name" id="login-user-name-label">
            User Name
          </label>
          <br />
          <input type="user-name" id="login-user-name-input" />
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
