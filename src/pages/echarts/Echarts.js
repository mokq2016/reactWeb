import React, { Component } from 'react'
import Panel from '../../components/panel/panel';

const echarts = require('echarts');

export default class extends Component {
  render() {
    return (
      <div style={{padding:'24px'}}>
        <Panel>
          <div id='echarts1' style={{height:'300px',width:'100%'}}></div>
        </Panel>
      </div>
    )
  }
  
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts1'));
// 绘制图表
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
  }
  
}
