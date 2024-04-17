import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const AppLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main
        style={{
          display: 'flex',
          minHeight: 'calc(100vh - 55px)',
          height: '100%',
        }}
      >
        <aside
          style={{
            width: '300px',
            minHeight: 'calc(100vh - 55px)',
            height: '100%',
            backgroundColor: 'black',
          }}
        ></aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
