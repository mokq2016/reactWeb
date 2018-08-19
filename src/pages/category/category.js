import React, { Component } from "react";
import DataTable from "../../components/DataTable/DataTable";
import createColumns from "./columns";
export default class Category extends Component {
  render() {
    const columns = createColumns(this, []);
    const pageData = {
      list: [
        {
          key: "1",
          name: "胡彦斌",
          desc: "西湖区湖底公园1号"
        },
        {
          key: "2",
          name: "胡彦祖",
          desc: "西湖区湖底公园1号"
        }
      ],
      currentPage: 1,
      total: 12
    };
    const dataTableProps = {
      columns,
      dataList: pageData,
      selectedRowKeys: [],
      selectType: "checkbox"
    };
    return (
      <div>
        <DataTable {...dataTableProps} />
      </div>
    );
  }
}
