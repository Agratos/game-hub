import React from 'react';
import './MyPage.style.css';
import MyPageHeader from './component/MyPageHeader';
import MyPageGamePlatforms from './component/MyPageGamePlatforms';
import { useSelector } from 'react-redux';
import MyPageMyGames from './component/MyPageMyGames';

const MyPage = () => {
  const { id } = useSelector((state) => state.auth);

  return (
    <div className='mypage-container'>
      <div className='mypage-wrapper'>
        <section className='mypage-header'>
          <MyPageHeader userName={id} />
        </section>
        <section className='mypage-overview'>
          <MyPageGamePlatforms />
          <MyPageMyGames />
        </section>
      </div>
    </div>
  );
};

export default MyPage;
