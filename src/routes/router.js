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


      
      // {
      //   path: "/button",
      //   component: Button,
      //   componentPath:'../components/Button/Button'
      // },
      // {
      //   path: "/datepicker",
      //   component: DatePicker
      // },
      // {
      //   path: "/select",
      //   component: Select
      // },
      // {
      //   path: "/pagination",
      //   component: Pagination
      // },
      // {
      //   path: "/category",
      //   component: Category
      // },
      // {
      //   path: "/echarts",
      //   component: Echarts
      // }
    ]
  },
  {
    path: "/login",
    component: asyncComponent(() => import('../pages/login/login'))
  },{
    path: "/",
    component: asyncComponent(() => import('../pages/echarts/Echarts'))
  },{
    path: "/sds",
    component: asyncComponent(() => import('../components/Pagination/Pagination'))
  }
];
const RouteWithSubRoutes = route =>(

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
    component={route.component} />
);

const RouteConfigExample = () => (
  <LocaleProvider locale={zhCN}>
  
      
     {routes.map((route, i) => (
      //<RouteWithSubRoutes key={i} {...route} />
      <Route  
        path={route.path} render={ props => <route.component {...props}/>} ></Route>
    ))} 
    
  </LocaleProvider>
);

export default RouteConfigExample();
