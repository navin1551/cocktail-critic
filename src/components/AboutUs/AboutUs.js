import React from "react";
import SignInForm from "../SignInForm/SignInForm";
import "./AboutUs.css";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="welcome-area">
          <h3>Welcome to Cocktail Critic!</h3>
          <p>
            Have you ever ordered or has someone bought you a drink that you
            absolutely loved or absolutely hated? Did you want to keep track of
            that for next time? This is where your search ends! Search for a
            cocktail and add your review! You can come back any time you want to
            keep track of what you liked and what you didn't!
          </p>

          <p>All you have to do is sign in or sign up now to get started!</p>
        </div>
        <div className="sign-in-area">
          <SignInForm />
        </div>
      </div>
    );
  }
}
