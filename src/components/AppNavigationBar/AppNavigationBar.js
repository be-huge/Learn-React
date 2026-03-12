import './AppNavigationBar.css';

import { useLocation, useNavigate } from 'react-router-dom';

const AppNavigationBar = ({
  title = '我是标题',
  height = 44,
  bgColor,
  titleColor,
  titleTextSize = 14,
  displayBackBtn = false,
  backPath
}) => {
  const _useLocation = useLocation();
  const _useNavigate = useNavigate();

  const backBtnContent = () => {
    if (displayBackBtn) {
      return <div className='back-btn-clip-path'></div>
    }
    return <></>;
  }

  const backBtnClickEvent = () => {
    if (!displayBackBtn) return;

    if (_useLocation.pathname === '/') return;

    (backPath && _useNavigate(backPath)) || _useNavigate(-1);
  }

  return (
    <>
      <div
        className="app-title-bar-container"
        style={
          {
            height,
            backgroundColor: bgColor,
            color: titleColor,
            fontSize: titleTextSize,
          }
        }>
          <div className='back-btn-container' onClick={backBtnClickEvent}>
            { backBtnContent() }
          </div>

          <div>{title}</div>
        </div>
    </>
  );
}

export default AppNavigationBar;