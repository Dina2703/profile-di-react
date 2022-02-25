import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18next";
import "flag-icons/css/flag-icons.min.css";

ReactDOM.render(
  <Suspense fallback={<div>Loading ...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
