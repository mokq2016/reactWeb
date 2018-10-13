import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, Layout, Menu, Icon, Breadcrumb } from "antd";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LeftMenu from "./components/leftMenu";

const { Header, Sider, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageArr: ["echarts"]
    };
  }
  render() {
    console.log(this.props.routes)
    return (
      <Layout>
        <Header />
        <Layout style={{ height: "calc(100vh - 64px)" }}>
          <Sider>
            <LeftMenu chooseMenu={e => this.chooseMenu(e)} />
          </Sider>
          <Content style={{ height: "100%" }}>
            <Header className="main-header">
              <Breadcrumb>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                {this.state.pageArr.map((item, index) => (
                  <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </Header>
            <div>
              <Switch>
                {this.props.routes.map((item, index) => (
                  <Route
                    key={index}
                    path={ item.path}
                    component={item.component}
                  />
                ))}
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
  chooseMenu(e) {
    this.setState({
      pageArr: e.keyPath.reverse()
    });
  }
}

export default App;
