import React from "react";
import ReactDOM from "react-dom";
import StarRating from "../components/StarRating/StarRating";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <StarRating />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
