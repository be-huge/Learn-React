import AppNavigationBar from '../../components/AppNavigationBar/AppNavigationBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className='home-page'>
        <AppNavigationBar
          title='主页'
          bgColor={'#fff'}
          displayBackBtn
        ></AppNavigationBar>
      </div>
    </>
  );
}

export default HomePage;