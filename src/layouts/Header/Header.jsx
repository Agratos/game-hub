import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';

import './Header.style.css';
import logoImg from './img/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../../store/slice/searchValueSlice';

const Header = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  const searchFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchActions.search(''));
  };

  return (
    <div className='header-container'>
      <Link className='header-logo-link' to='/'>
        <img src={logoImg} alt='header-logo' />
      </Link>

      <form className='header-search-box' onSubmit={(e) => searchFormSubmit(e)}>
        <FiSearch className='header-search-icon' />
        <input
          type='text'
          value={searchValue}
          onChange={(e) => dispatch(searchActions.search(e.target.value))}
        />
        <button
          type='button'
          onClick={() => dispatch(searchActions.search(''))}
          className='header-search-remove'
        >
          <TiDelete className='header-TiDelete' />
        </button>
      </form>
      <div>로그인</div>
    </div>
  );
};

export default Header;
