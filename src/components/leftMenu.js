import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import Item from "../../node_modules/antd/lib/list/Item";

const { SubMenu } = Menu;
export default class LeftMenu extends Component {
  render() {
    const menuArr = [
      {
        name: "仪表盘",
        icon: "dashboard",
        path: "/main/dashboard"
      },
      {
        name: "antd组件",
        icon: "desktop",
        menuItemArr: [
          {
            path: "/main/button",
            name: "Button"
          },
          {
            path: "/main/icon",
            name: "Icon"
          },
          {
            path: "/main/dropdown",
            name: "下拉菜单"
          },
          {
            path: "/main/menu",
            name: "导航菜单"
          }
        ]
      },
      {
        name: "商城管理",
        icon: "book",
        menuItemArr: [
          {
            path: "/main/category",
            name: "分类管理"
          },
          {
            path: "/main/icon",
            name: "Icon"
          },
          {
            path: "",
            name: "button"
          },
          {
            path: "",
            name: "button"
          }
        ]
      }
    ];
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["仪表盘"]}
        style={{
          height: "100%",
          borderRight: 0
        }}
        onClick={e => this.menuClick(e)}
      >
        {menuArr.map((item, index) => {
          if (item.menuItemArr) {
            return (
              <SubMenu
                key={item.name}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </span>
                }
              >
                {item.menuItemArr.map((obj, inx) => (
                  <Menu.Item key={obj.name}>
                    <Link to={obj.path}>{obj.name}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.name}>
                <Link to={item.path}>
                  <Icon type={item.icon} />
                  {item.name}
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  }
  menuClick(obj) {
    this.props.chooseMenu(obj);
  }
}
