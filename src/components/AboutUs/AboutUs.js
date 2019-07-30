import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../SignInForm/SignInForm";
import "./AboutUs.css";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-area">
        <div className="welcome-area">
          <h3>Welcome to Cocktail Critic!</h3>
          <p className="about-us-description">
            Have you ever ordered or has someone bought you a drink that you
            absolutely loved or absolutely hated? Did you want to keep track of
            that for next time? This is where your search ends! Search for a
            cocktail and add your review! You can come back any time you want to
            keep track of what you liked and what you didn't!
          </p>

          <p className="about-us-instructions">
            <span id="instructions-title">
              Its simple, all you have to do is:
            </span>
            <br />
            <br />
            1. <Link to="/register">Sign up</Link> for login credentials
            <br />
            <br />
            2. Search for a drink you like or dislike
            <br />
            <br />
            3. Write a review and give a rating for next time
          </p>
        </div>
        <div className="sign-in-area">
          <SignInForm />
        </div>
      </div>
    );
  }
}
