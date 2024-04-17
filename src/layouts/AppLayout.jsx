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
        }}
      >
        <aside
          style={{
            width: '300px',
            height: '100vh',
            backgroundColor: 'black',
          }}
        ></aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
