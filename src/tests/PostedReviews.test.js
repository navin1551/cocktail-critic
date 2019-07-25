import React from "react";
import ReactDOM from "react-dom";
import PostedReviews from "../components/PostedReviews/PostedReviews";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PostedReviews />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
