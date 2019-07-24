import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";

export default class App extends React.Component {
  state = {
    cocktails: [],
    reviews: [],
    searchResults: []
  };

  handleCocktailSearch = cocktails => {
    this.setState({
      cocktails: cocktails
    });
  };

  render() {
    return (
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
          </Switch>
        </main>
      </div>
    );
  }
}
