import React, { Component } from 'react'
import { Select } from 'antd';
import { Row, Col } from 'antd';
import Panel from "../panel/panel";
const Option = Select.Option;

export default class extends Component {

  handleChange(){

  }
  
  render() {
    function handleFocus(){

    }
    function handleBlur(){

    }
    const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

    return (
      <div style={{padding:'24px'}}>
          <Row gutter={16}>
            <Col span={8}>
              <Panel>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={e => this.handleChange()}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Panel>
            </Col>
            <Col span={8}>
              <Panel>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={e => this.handleChange()}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Panel>
            </Col>
            <Col span={8}>
              <Panel>
                <Select
                  mode="tags"
                  style={{ width: '100%' }}
                  placeholder="Tags Mode"
                  onChange={e=>this.handleChange()}
                  >
                    {children}
                  </Select>
              </Panel>
            </Col>
          </Row>
      </div>
    )
  }
}
