import React from 'react';
import { Link } from 'react-router-dom';
import './Signs.style.css';
import { useSelector, useDispatch } from 'react-redux';
import { authenicateActions } from '../../store/slice/authenicateSlice';
import { IoPersonCircleOutline } from 'react-icons/io5';

const Signs = () => {
  const dispatch = useDispatch();
  const { id, profileImage, authenticate } = useSelector((state) => state.auth);
  console.log('13123123123', id, profileImage, authenticate);

  return (
    <>
      {authenticate ? (
        <>
          <li>
            <button
              className='sign-logout-bt'
              onClick={() => dispatch(authenicateActions.logout())}
            >
              Sign out
            </button>
          </li>
          <li className='sign-item'>
            <Link to='/mypage'>
              <div className='Sign-profile'>
                {profileImage === null ? (
                  <IoPersonCircleOutline className='sign-default-img' />
                ) : (
                  <img src={profileImage} alt='profile-img' />
                )}
              </div>
            </Link>
          </li>
        </>
      ) : (
        <li className='sign-item'>
          <Link to='/login'>
            <span className='header-sign-span'>Sign in</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default Signs;
