import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, Layout, Menu, Icon, Breadcrumb } from "antd";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LeftMenu from "./components/leftMenu";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Bus = () => <h3>Bus</h3>;
const Bus2 = () => <h3>Bu2s</h3>;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageArr: ["仪表盘"]
    };
  }
  render() {
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
                  <Breadcrumb.Item>{item}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </Header>
            <div style={{ padding: "24px" }}>
              <Switch>
                {this.props.routes.map((item, index) => (
                  <Route
                    key={index}
                    path={"/main" + item.path}
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
