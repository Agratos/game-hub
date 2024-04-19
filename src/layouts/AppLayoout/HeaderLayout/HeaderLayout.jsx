import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header/Header';
import './HeaderLayout.style.css';

// import { useSelector } from 'react-redux';

const HeaderLayout = () => {
  //   const hamburgerOn = useSelector((state) => state.hamburger.hamburgerOn);
  return (
    <div className='applayout-wrapper'>
      <header className='applayout-header'>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
