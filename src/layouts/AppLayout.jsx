import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import './AppLayout.style.css';
import SideBar from './SideBar/SideBar';
import { useSelector } from 'react-redux';

const AppLayout = () => {
  const hamburgerOn = useSelector((state) => state.hamburger.hamburgerOn);

  return (
    <div className='applayout-wrapper'>
      <header className='applayout-header'>
        <Header />
      </header>
      <main>
        <aside className={`${hamburgerOn ? 'm-sidebar' : ''}`}>
          <SideBar />
        </aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
