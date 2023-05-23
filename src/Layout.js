import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Body>
        <Outlet />
      </Body>
      <Footer/>
    </div>
  );
};

export default Layout;