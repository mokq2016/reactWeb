import React, { Component } from "react";
import { Icon } from "antd";
import cx from "classnames";
import "./style.less";

export default class Panel extends Component {
  static defaultProps = {
    prefix: "antui-panel"
  };

  render() {
    const { prefix, children, header, title } = this.props;
    const classnames = cx(prefix);
    const Header =
      typeof header === "undefined" ? (
        <div className={`${prefix}-header`}>
          <span className={`${prefix}-header-title`}>{title}</span>
          <span className={`${prefix}-header-controls`}>
            <a className="panel-control-loader">
              <Icon type="reload" />
            </a>
          </span>
        </div>
      ) : (
        header
      );
    return (
      <div className={classnames}>
        {Header}
        <div className={`${prefix}-body`}>{children}</div>
      </div>
    );
  }
}
