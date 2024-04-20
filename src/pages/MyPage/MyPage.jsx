import React from 'react';
import './MyPage.style.css';
import MainPageHeader from './component/MainPageHeader';
import MainPageGamePlatforms from './component/MainPageGamePlatforms';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { id } = useSelector((state) => state.auth);

  return (
    <div className='mypage-container'>
      <div className='mypage-wrapper'>
        <section className='mypage-header'>
          <MainPageHeader userName={id} />
        </section>
        <section className='mypage-overview'>
          <MainPageGamePlatforms />
          {/* 내용추가 */}
        </section>
      </div>
    </div>
  );
};

export default MyPage;
