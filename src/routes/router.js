import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "../App";

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;
const routes = [
  {
    path: "/main",
    component: App,
    routes: [
      {
        path: "/bus",
        component: Bus
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
