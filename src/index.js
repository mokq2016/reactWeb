import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import routes from "./routes/router";

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)

}
ReactDOM.render(
  <HashRouter url="123" getUserConfirmation={getConfirmation}>{routes}</HashRouter>,
  document.getElementById("root")
);

registerServiceWorker();
