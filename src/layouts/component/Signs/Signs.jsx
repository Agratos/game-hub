import React from 'react';
import { Link } from 'react-router-dom';
import './Signs.style.css';
import { useSelector, useDispatch } from 'react-redux';
// import { authenicateActions } from '../../../../store/slice/authenicateSlice';
import { authenicateActions } from '../../../store/slice/authenicateSlice';
import { IoPersonCircleOutline } from 'react-icons/io5';

const Signs = () => {
  const dispatch = useDispatch();
  const { id, profileImage, authenticate } = useSelector((state) => state.auth);

  return (
    <>
      {authenticate ? (
        <>
          <li className='sign-item'>
            <button
              className='sign-logout-bt header-sign-bt'
              onClick={() => dispatch(authenicateActions.logout())}
            >
              Sign out
            </button>
          </li>
          <li className='sign-item'>
            <Link to='/my-page'>
              <div className='Sign-profile'>
                {profileImage === null ? (
                  <IoPersonCircleOutline className='sign-default-img' />
                ) : (
                  <>
                    <span className='signs-user-name'>{id ? id : 'User'}</span>
                    <img src={profileImage} alt='profile-img' />
                  </>
                )}
              </div>
            </Link>
          </li>
        </>
      ) : (
        <li className='sign-item'>
          <Link to='/login'>
            <button className='header-sign-bt'>Sign in</button>
          </Link>
        </li>
      )}
    </>
  );
};

export default Signs;
