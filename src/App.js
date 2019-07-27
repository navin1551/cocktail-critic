import React from "react";
import { Route, Switch } from "react-router-dom";
import CocktailContext from "./CocktailContext";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import PostedReviews from "./components/PostedReviews/PostedReviews";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import config from "./config";

export default class App extends React.Component {
  state = {
    cocktails: [],
    reviews: [],
    searchResults: []
  };

  componentDidMount() {
    Promise.all([fetch(`${config.API_ENDPOINT}/reviews`)])
      .then(([revRes]) => {
        if (!revRes) return revRes.json().then(e => Promise.reject(e));

        return Promise.all([revRes.json()]);
      })
      .then(([reviews]) => {
        this.setState({
          reviews
        });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  cocktailSearchHandle = cocktails => {
    this.setState({
      cocktails: cocktails
    });
  };

  addReviewHandle = newReview => {
    let currentReviews = this.state.reviews;
    currentReviews.push(newReview);
    this.setState({
      reviews: currentReviews
    });
  };

  render() {
    const contextValue = {
      cocktails: this.state.cocktails,
      reviews: this.state.reviews,
      searchResults: this.state.searchResults,
      addReview: this.addReviewHandle
    };

    return (
      <CocktailContext.Provider value={contextValue}>
        <div className="app">
          <section>
            <NavBar />
            <Header />
          </section>
          <main>
            <Switch>
              <Route exact path="/" component={AboutUs} />
              <Route path="/register" component={Register} />
              <Route path="/search" component={Search} />
              <Route path="/posted-reviews" component={PostedReviews} />
              <Route path="/profile-page" component={ProfilePage} />
            </Switch>
          </main>
        </div>
      </CocktailContext.Provider>
    );
  }
}
