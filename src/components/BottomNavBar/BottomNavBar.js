import './BottomNavBar.css';

import { useState } from "react";

const BottomNavBar = (props) => {
  const {
    barList,
    bgColor,
    activedColor,
    containerHeight = 44
  } = props;
  const [activedIndex, setActivedIndex] = useState(0);

  const barListLength = barList?.length || 0;

  const onClickBarItem = (item, index) => {
    setActivedIndex(index);

    props.onSend(item, index);
  }
  
  return (
    <>
      <div
        className='bottom-nav-container'
        style={{
          gridTemplateColumns: `repeat(${barListLength}, 1fr)`,
          backgroundColor: bgColor,
          height: containerHeight
        }}>
          {
            barList?.map((item, index) => {
              return (
                <div
                  className={`
                      'bar-item'
                      ${activedIndex === index ? 'actived' : ''}
                    `
                  }
                  style={{
                    '--BBItemActiveColor': activedColor,
                  }}
                  key={index}
                  onClick={() => onClickBarItem(item, index)}
                >{ item.name }</div>
              );
            })
          }
        </div>
    </>
  );
}

export default BottomNavBar;