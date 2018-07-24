import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, Layout, Menu, Icon } from "antd";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Header />
        <Layout style={{ height: "calc(100vh - 64px)" }}>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0
              }}
            >
              <SubMenu
                title={
                  <span>
                    <Icon type="user" />subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ height: "100%" }}>
            <Switch>
              <div>
                {this.props.routes.map((item, index) => {
                  <Route path="/bus" component={item.component} />;
                })}
              </div>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
