import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Button from "../components/Button/Button";
import App from "../App";
import Login from "../pages/login/login";
import Category from "../pages/category/category";
import DatePicker from '../components/DatePicker/DatePicker';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider}  from 'antd'

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
        path: "/datepicker",
        component: DatePicker
      },
      {
        path: "/cart",
        component: Cart
      },
      {
        path: "/category",
        component: Category
      }
    ]
  },
  {
    path: "/login",
    component: Login
  },{
    path: "/"
  }
];
const RouteWithSubRoutes = route =>(
  <LocaleProvider locale={zhCN}>
   <Route  
    path={route.path}
    render={(props) => (
      // pass the sub-routes down to keep nesting
      route.path == '/'?(<Redirect to="/main/dashboard"/>):(
      <route.component {...props} routes={route.routes} />
    ))} />
  </LocaleProvider>
  
 
);

const RouteConfigExample = () => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
);

export default RouteConfigExample();
