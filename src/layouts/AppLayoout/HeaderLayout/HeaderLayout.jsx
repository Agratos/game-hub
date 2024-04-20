// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../../component/Header/Header';
import './HeaderLayout.style.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header/Header';
import SideBar from '../../component/SideBar/SideBar';

import { useSelector } from 'react-redux';

const HeaderLayout = () => {
  const hamburgerOn = useSelector((state) => state.hamburger.hamburgerOn);
  return (
    <div className='applayout-wrapper'>
      <header className='applayout-header'>
        <Header />
      </header>
      {/* <main>
        <Outlet />
      </main> */}
      <main>
        <aside className={`${hamburgerOn ? 'm-sidebar' : 'headerlayout-hd'}`}>
          <SideBar />
        </aside>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
