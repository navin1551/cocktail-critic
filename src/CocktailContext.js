import React from "react";

const CocktailContext = React.createContext({
  cocktails: [],
  reviews: [],
  searchResults: []
});

export default CocktailContext;
