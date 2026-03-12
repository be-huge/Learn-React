import './MidContent.css';
import { useNavigate } from "react-router-dom";
import { forwardRef, useImperativeHandle, useState } from "react";

const MidContent = forwardRef((props, ref) => {
  const {
    componentName,
    currentComponentItem
  } = props;

  const [cNI, setCNI] = useState(null);
  const _useNavigate = useNavigate();
  const gotoDetail = () => {
    _useNavigate(`/PageDetail/${componentName}`, { state: cNI || currentComponentItem });
  }
  useImperativeHandle(ref, (cNI) => ({ // 暴露方法给父组件
    setComponentItemValue() {
      setCNI(cNI);
    }
  }));
  return (
    <>
      <div className="mid-content">
        <div>我是{componentName}页面</div>
        <button onClick={gotoDetail}>前往详情页</button>
      </div>
    </>
  );
});

export default MidContent;