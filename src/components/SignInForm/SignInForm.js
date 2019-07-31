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

    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        console.log(res);
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
    const { error } = this.state;
    return (
      <section role="contentinfo">
        <h3 id="sign-in-title">Already have an account?</h3>
        <form onSubmit={e => this.handleSubmitJwtAuth(e)}>
          <label htmlFor="user-name" id="login-user-name-label">
            User Name:
          </label>
          <br />
          <input type="text" id="login-user-name-input" name="user_name" />
          <br />
          <label htmlFor="password" id="login-password-label">
            Password:
          </label>
          <br />
          <input type="password" id="password-input" name="password" />
          <br />
          <span id="user-password-span">
            *user name/password are case sensitive
          </span>
          <br />
          <button id="sign-in-button">Sign In</button>
        </form>
        <div className="demo-login-area">
          <p id="demo-login-span">Demo login info:</p>
          <span>User Name:</span>
          <span>testuser1</span>
          <br />
          <span>Password:</span>
          <span>Password1$</span>
        </div>
        <div className="alert-area" role="alert">
          {error && <span className="red">{error}</span>}
        </div>
      </section>
    );
  }
}
