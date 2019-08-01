import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicOnlyRoute from "./routes/PublicOnlyRoute";
import CocktailContext from "./CocktailContext";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import PostedReviews from "./components/PostedReviews/PostedReviews";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ErrorBoundary from "./ErrorBoundary";
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

  deleteReviewHandle = id => {
    let updatedReplies = this.state.reviews.filter(review => review.id !== id);
    this.setState({
      reviews: updatedReplies
    });
  };

  render() {
    const contextValue = {
      cocktails: this.state.cocktails,
      reviews: this.state.reviews,
      searchResults: this.state.searchResults,
      addReview: this.addReviewHandle,
      deleteReview: this.deleteReviewHandle
    };

    return (
      <CocktailContext.Provider value={contextValue}>
        <div className="app">
          <section>
            <NavBar />
            <Header />
          </section>
          <section role="main">
            <ErrorBoundary>
              <Switch>
                <PublicOnlyRoute exact path="/" component={AboutUs} />
                <PublicOnlyRoute path="/register" component={Register} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute
                  path="/posted-reviews"
                  component={PostedReviews}
                />
                <PrivateRoute path="/profile-page" component={ProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </ErrorBoundary>
          </section>
        </div>
      </CocktailContext.Provider>
    );
  }
}
