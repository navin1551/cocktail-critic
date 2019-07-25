import React from "react";
import ReactDOM from "react-dom";
import Register from "../components/Register/Register";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
