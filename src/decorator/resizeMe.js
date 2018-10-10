import React, { PureComponent } from "react";
import { ResizeSensor } from "css-element-queries";
import $$ from "cmn-utils";
const { throttle, debounce } = $$;

const defaultConfig = {
  refreshRate: 16, // 调用频率
  refreshMode: "throttle" // 使用函数，只能是节流或防抖函数[throttle | debounce]1
};
const resizeMe = (config = defaultConfig) => {
  const refreshFunc = config.refreshMode === "throttle" ? throttle : debounce;
  return WrappedComponent => {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.onResizeStrategy = refreshFunc(this.onResize, config.refreshRate);
        this.state = {
          width: undefined,
          height: undefined
        };
      }

      componentDidMount() {
        const element = this.element.parentNode;
        this.resizeSensor = new ResizeSensor(element, this.onResizeStrategy);
        this.onResizeStrategy();
      }
      
      componentWillUnmount() {
        const element = this.element.parentNode;
        this.resizeSensor.detach(element, this.onResizeStrategy);
      }
      
      onResize = ()=>{
          const element = this.element.parentNode;
          const { width, height, paddingLeft, paddingRight, paddingTop, paddingBottom } = getComputedStyle(element);

          const size = {
            width: parseInt(width, 10) - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10),
            height: parseInt(height, 10) - parseInt(paddingTop, 10) - parseInt(paddingBottom, 10),
          }
          this.setState(size);
      }
      render() {
        const { width, height } = this.state;
        const { className, ...otherProps } = this.props;
        console.log(width,height)
        return (
          <div
            className={className}
            {...otherProps}
            ref={node => (this.element = node)}
          >
            {width && height ? <WrappedComponent {...otherProps} size={{...this.state}}/> : null}
          </div>
        );
      }
    };
  };
};
export default resizeMe;
