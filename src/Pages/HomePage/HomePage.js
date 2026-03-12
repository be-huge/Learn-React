import './HomePage.css';

import AppNavigationBar from '../../components/AppNavigationBar/AppNavigationBar';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import MidContent from '../../components/MidContent/MidContent';

import { useState, useRef } from "react";

const HomePage = () => {
  const barListValue = [
    { name: '首页', componentName: 'Home', detailPath: 'HomeDetail' },
    { name: '消息', componentName: 'Msg', detailPath: 'MsgDetail' },
    { name: '设置', componentName: 'Setting', detailPath: 'SettingDetail' },
  ];

  const [componentName, setComponentName] = useState('首页');
  const [currentComponentItem, setCurrentComponentItem] = useState(barListValue[0]);

  const midContentRef = useRef();

  const bottomBarClickCallback = (item, index) => {
    setComponentName(item.name);
    setCurrentComponentItem(item);

    // // 也可以使用ref调用子组件方法（超级难用🤮）
    // midContentRef.current.setComponentItemValue(item);
  }
  return (
    <>
      <div className='home-page'>
        <AppNavigationBar
          title={componentName}
          bgColor='#fff'
        ></AppNavigationBar>

        <MidContent
          ref={midContentRef}
          componentName={componentName}
          currentComponentItem={currentComponentItem}></MidContent>

        <BottomNavBar
          barList={ barListValue }
          bgColor='#fff'
          activedColor='blue'
          onSend={bottomBarClickCallback}></BottomNavBar>
      </div>
    </>
  );
}

export default HomePage;