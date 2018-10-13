import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
//import Button from "../components/Button/Button";
//import App from "../App";
//import Login from "../pages/login/login";
// import Category from "../pages/category/category";
// import Echarts from "../pages/echarts/Echarts";
// import DatePicker from '../components/DatePicker/DatePicker';
// import Pagination from '../components/Pagination/Pagination';
// import Select from '../components/Select/Select';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import asyncComponent from '../components/Bundle/Bundle';
import {LocaleProvider}  from 'antd'


// const App = asyncComponent(() => import('../App'))
// const Login = asyncComponent(() => import('../pages/login/login'))
// const Echarts = asyncComponent(() => import('../pages/echarts/Echarts'))
const routes = [
  {
    path: "/main",
    component:asyncComponent(() => import('../App')),
    routes: [     
      {
        path: "/main/button",
        component: asyncComponent(() => import('../components/Button/Button')),
      },
      {
        path: "/main/datepicker",
        component: asyncComponent(() => import('../components/DatePicker/DatePicker'))
      },
      {
        path: "/main/select",
        component: asyncComponent(() => import('../components/Select/Select'))
      },
      {
        path: "/main/pagination",
        component: asyncComponent(() => import('../components/Pagination/Pagination'))
      },
      {
        path: "/main/category",
        component: asyncComponent(() => import('../pages/category/category'))
      },
      {
        path: "/main/echarts",
        component: asyncComponent(() => import('../pages/echarts/Echarts'))
      }
    ]
  },
  {
    path: "/login",
    component: asyncComponent(() => import('../pages/login/login'))
  },{
    path: "/",
    component: asyncComponent(() => import('../App'))
  }
];

const RouteConfigExample = () => (
  <LocaleProvider locale={zhCN}>
    <div>
     {routes.map((route, i) => 
       route.path == '/'?(<Redirect path="/" to='/main/button' />):
      (<Route  key={i}
        path={route.path} render={ props => <route.component {...props} routes={route.routes}/>} ></Route>)
      
    )} 
    </div>
  </LocaleProvider>
);

export default RouteConfigExample();
