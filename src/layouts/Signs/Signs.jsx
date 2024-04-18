import React from 'react';
import { Link } from 'react-router-dom';
import './Signs.style.css';

const Signs = () => {
  return (
    <>
      <li className='sign-item'>
        <Link to='/login'>
          <span className='header-sign-span'>Sign in</span>
        </Link>
      </li>
      <li className='sign-item'>
        <Link to='/login'>
          <span className='header-sign-span'>Sign up</span>
        </Link>
      </li>
    </>
  );
};

export default Signs;
