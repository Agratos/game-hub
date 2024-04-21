import React from 'react';
import { useDispatch } from 'react-redux';
import { authenicateActions } from '../../../store/slice/authenicateSlice';

const MyPageHeader = ({ userName }) => {
  const dispatch = useDispatch();
  return (
    <>
      <article className='mypage-header-title'>
        <h3>계정</h3>
        <button onClick={() => dispatch(authenicateActions.logout())}>
          <span>Sign out</span>
        </button>
      </article>
      <article className='mypage-header-user-name'>
        <h2>{userName ? userName : 'User'} 님, 안녕하세요.</h2>
      </article>
    </>
  );
};

export default MyPageHeader;
