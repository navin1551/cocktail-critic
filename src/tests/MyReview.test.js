import React from "react";
import ReactDOM from "react-dom";
import MyReview from "../components/MyReview/MyReview";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MyReview />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
