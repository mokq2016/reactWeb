import React, { Component } from "react";
import { Icon } from "antd";
import cx from "classnames";
import CSSAnimate from "../cssAnimate/index";
import "./style.less";


export default class Panel extends Component {
  static defaultProps = {
    prefix: "antui-panel"
  };
  constructor(props) {
    super(props);
    this.state = {
      collapse: props.collapse || false,
      expand: props.expand || false,
      refresh: 0,
      animationName: ""
    };
  }
  onCollapse = collapse => e => {
    const { onChange } = this.props;

    this.setState({
      collapse,
      expand: false
    });

    if (onChange) {
      onChange({
        collapse,
        expand: false
      });
    }
  };

  onRefresh = () => {
    this.setState({
      refresh: this.state.refresh + 1,
      animationName: "fadeIn"
    });
    this.props.onRefresh && this.props.onRefresh();
  };

  render() {
    const { expand, collapse, refresh, animationName } = this.state;
    const { prefix, className,style, children,width,height, header, title } = this.props;
    const styles = {
      ...style,
      width
    };
    const bodyStyles = {};
    if (!expand) {
      bodyStyles.height = height;
    }
    const classnames = cx(prefix, className, {
      "panel-fullscreen": !!expand,
      "panel-collapsed": !!collapse
    });
    const Header =
      typeof header === "undefined" ? (
        <div className={`${prefix}-header`}>
          <span className={`${prefix}-header-title`}>{title}</span>
          <span className={`${prefix}-header-controls`}>
            <a className="panel-control-loader" onClick={this.onRefresh}>
              <Icon type="reload" />
            </a>
            <a className="panel-control-loader">
              <Icon type="arrows-alt" />
            </a>
            <a
              className="panel-control-loader"
              onClick={this.onCollapse(collapse ? false : true)}
            >
              <Icon type={`${collapse ? "plus" : "minus"}`} />
            </a>
            <a className="panel-control-loader">
              <Icon type="close" />
            </a>
          </span>
        </div>
      ) : (
        header
      );
    return (
      <div className={classnames} style={styles}>
        {Header}
        <div className={`${prefix}-body`} style={bodyStyles}>
          <CSSAnimate
            className="panel-content"
            type={animationName}
            callback={e => this.setState({ animationName: "" })}
            key={refresh}
          >
            {children}
          </CSSAnimate>
        </div>
      </div>
    );
  }
}
