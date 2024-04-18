import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import './AppLayout.style.css';
import SideBar from './SideBar/SideBar';

const AppLayout = () => {
  return (
    <div className='applayout-wrapper'>
      <header className='applayout-header'>
        <Header />
      </header>
      <main>
        <aside>
          <SideBar />
        </aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
