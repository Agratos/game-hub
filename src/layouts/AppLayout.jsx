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
        // 임시 스타일
        style={{
          display: 'flex',
          minHeight: 'calc(100vh - 55px)',
          height: '100%',
          backgroundColor: '#1d1d1f',
        }}
      >
        <aside
          // 임시 스타일
          style={{
            width: '300px',
            minHeight: 'calc(100vh - 55px)',
            height: '100%',
            backgroundColor: '#1d1d1f',
            borderRight: '1px solid #999',
          }}
        ></aside>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
