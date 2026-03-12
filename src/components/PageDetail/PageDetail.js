import './PageDetail.css';

import AppNavigationBar from '../AppNavigationBar/AppNavigationBar';

// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PageDetail = () => {
  // const _useParams = useParams();
  // const componentName = _useParams.name;

  const _useLocation = useLocation();
  const obj = _useLocation.state;

  return (
    <>
      <AppNavigationBar
        title={`${obj.name}详情`}
        bgColor='#fff'
        displayBackBtn
      ></AppNavigationBar>

      <div className='content'>
        <div>
          我是{ `${obj.name}(${obj.componentName})` }详情
        </div>
      </div>
    </>
  );
}

export default PageDetail;