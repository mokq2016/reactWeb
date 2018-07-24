import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import routes from "./routes/router";

ReactDOM.render(
  <HashRouter url="123">{routes}</HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
