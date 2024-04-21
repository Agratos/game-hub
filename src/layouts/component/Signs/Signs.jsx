import React from 'react';
import { Link } from 'react-router-dom';
import './Signs.style.css';
import { useSelector, useDispatch } from 'react-redux';
// import { authenicateActions } from '../../../../store/slice/authenicateSlice';
import { authenicateActions } from '../../../store/slice/authenicateSlice';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Signs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, profileImage, authenticate } = useSelector((state) => state.auth);

  const signOut = () => {
    dispatch(authenicateActions.logout());
    navigate('/');
    alert('로그아웃됨');
  };

  return (
    <>
      {authenticate ? (
        <>
          <li className='sign-item'>
            <button
              className='sign-logout-bt header-sign-bt'
              onClick={() => signOut()}
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
