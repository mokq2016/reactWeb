import React, { Component } from 'react'
import moment from 'moment';
import 'moment/locale/zh-cn';

import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

import Panel from "../panel/panel";
const { MonthPicker, RangePicker } = DatePicker;


export default class extends Component{
    
    
    render(){
        moment.locale('zh-cn');
        const disabledDate = (current)=>
         current && current < moment().endOf('day');

         const dateFormat = 'YYYY-MM-DD';
        return (
            <div style={{padding:'24px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Panel title="日期控件">
                            <DatePicker />
                        </Panel>
                    </Col>
                    <Col span={8}>
                        <Panel title="月份选择">
                            <MonthPicker placeholder="Select month" disabledDate={disabledDate}/>
                        </Panel>
                    </Col>
                    <Col span={8}>
                        <Panel title="时间选择">
                            <DatePicker showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="Select Time"/>
                        </Panel>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Panel title="日期范围选择">
                            <RangePicker  />
                        </Panel>
                    </Col>
                    <Col span={12}>
                        <Panel title="月份选择">
                        <RangePicker
                            defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                            disabled
                                />
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}
