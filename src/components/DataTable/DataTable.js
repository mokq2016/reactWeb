import React, { Component } from "react";
import { Table } from "antd";
import "./style.less";

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };
  }
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRowKeys
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    const { columns, dataList, selectType, selectedRowKeys } = this.props;
    let cols = columns.map(item => {
      return {
        title: item.title,
        dataIndex: item.name
      };
    });
    console.log(selectedRowKeys);
    const _rowSelection = {
      type: selectType === "radio" ? "radio" : "checkbox",
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange
    };
    return (
      <div className="data-table">
        <Table
          size="small"
          columns={cols}
          dataSource={dataList.list}
          rowSelection={selectType ? _rowSelection : null}
        />
      </div>
    );
  }
}
