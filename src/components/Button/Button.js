import React, { Component } from "react";
import { Button } from "antd";
import Panel from "../panel/panel";

export default class extends Component {
  render() {
    return (
      <div style={{ padding: "24px" }}>
        <Panel title="按钮组件">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </Panel>
      </div>
    );
  }
}
