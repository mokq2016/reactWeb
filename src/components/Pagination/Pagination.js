import React, { Component } from 'react'
import {Row,Col } from 'antd';
import { Pagination } from 'antd';
import Panel from '../panel/panel'

export default class extends Component {
  render() {
    function onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    }
    function onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    }
    
    return (
      <div style={{padding:'24px'}}>
        <Row gutter={16}>
          <Col span={12}>
            <Panel>
              <Pagination defaultCurrent={6} total={500} />
            </Panel>
          </Col>
          <Col span={12}>
            <Panel>
              <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Panel>
              <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
            </Panel>
          </Col>
        </Row>
      </div>
    )
  }
}
