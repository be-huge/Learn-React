import './MidContent.css';
import { useNavigate } from "react-router-dom";

const MidContent = ({
  componentName,
  currentComponentItem
}) => {
  const _useNavigate = useNavigate();
  const gotoDetail = () => {
    _useNavigate(`/PageDetail/${componentName}`, { state: currentComponentItem });
  }
  return (
    <>
      <div className="mid-content">
        <div>我是{componentName}页面</div>
        <button onClick={gotoDetail}>前往详情页</button>
      </div>
    </>
  );
}

export default MidContent;