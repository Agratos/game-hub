import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import './AppLayout.style.css';

const AppLayout = () => {
  return (
    <div className='applayout-wrapper'>
      <header className='applayout-header'>
        <Header />
      </header>
      <main>
        <aside></aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
