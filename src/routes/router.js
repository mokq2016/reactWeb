import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Button from "../components/Button/Button";
import App from "../App";
import Login from "../pages/login/login";
import Category from "../pages/category/category";
import Echarts from "../pages/echarts/Echarts";
import DatePicker from '../components/DatePicker/DatePicker';
import Pagination from '../components/Pagination/Pagination';
import Select from '../components/Select/Select';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import BundleComponent from '../components/Bundle/Bundle';
import {LocaleProvider}  from 'antd'

const Cart = () => <h3>Cart</h3>;
const routes = [
  {
    path: "/main",
    component: App,
    componentPath:'../components/Button/Button',
    routes: [
      {
        path: "/button",
        component: Button,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/datepicker",
        component: DatePicker,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/select",
        component: Select,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/pagination",
        component: Pagination,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/cart",
        component: Cart,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/category",
        component: Category,
        componentPath:'../components/Button/Button'
      },
      {
        path: "/echarts",
        component: Echarts,
        componentPath:'../components/Button/Button'
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    componentPath:'../components/Button/Button'
  },{
    path: "/"
  }
];
const RouteWithSubRoutes = route =>(
  <LocaleProvider locale={zhCN}>
   <Route  
    path={route.path}
    // render={(props) => (
    //   // pass the sub-routes down to keep nesting
    //   route.path === '/'?(<Redirect to="/main/echarts"/>):(
    //   //<route.component {...props} routes={route.routes} />
    //   <BundleComponent load={() => import(route.componentPath)}>
    //     {(Component) => <Component {...props}/>}
    //   </BundleComponent>
    // ))}
    component={(props) => <BundleComponent load={() => import(route.componentPath)}>
         {(Component) => <Component {...props}/>}
       </BundleComponent>} />
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
