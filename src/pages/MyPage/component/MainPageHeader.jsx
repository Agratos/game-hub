import React from 'react';

const MainPageHeader = ({ userName }) => {
  return (
    <>
      <article className='mypage-header-title'>
        <h3>계정</h3>
        <button>
          <span>Sign out</span>
        </button>
      </article>
      <article className='mypage-header-user-name'>
        <h2>{userName ? userName : 'User'} 님, 안녕하세요.</h2>
      </article>
    </>
  );
};

export default MainPageHeader;
