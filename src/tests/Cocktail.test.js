import React from "react";
import ReactDOM from "react-dom";
import Cocktail from "../components/Cocktail/Cocktail";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Cocktail />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
