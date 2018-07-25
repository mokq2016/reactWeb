import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "../components/Button/Button";
import App from "../App";

const Cart = () => <h3>Cart</h3>;
const routes = [
  {
    path: "/main",
    component: App,
    routes: [
      {
        path: "/button",
        component: Button
      },
      {
        path: "/cart",
        component: Cart
      }
    ]
  },
  {
    path: "/Cart",
    component: Cart
  }
];
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting

      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <div>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

export default RouteConfigExample();
