import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <Header />
    </div>
  );
};

export default AppLayout;
