import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';

import './Header.style.css';
import logoImg from './img/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../../store/slice/searchValueSlice';
import { useGameListQuery } from '../../hooks/apis/useGameList';

const Header = () => {
  const [searchGames, setSearchGames] = useState(0);
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();

  const searchFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchActions.search(''));
  };

  const { data } = useGameListQuery();
  useEffect(() => {
    setSearchGames(data.count);
  }, [data]);

  // 3의배수 , 찍어주는 함수
  function formatNumberWithCommas(number) {
    // 숫자를 문자열로 변환
    const str = number.toString();
    // 문자열을 역순으로 변환
    const reversedStr = str.split('').reverse().join('');
    // 3자리마다 쉼표 추가
    const withCommas = reversedStr.match(/.{1,3}/g).join(',');
    // 최종 문자열을 다시 역순으로 변환하여 반환
    return withCommas.split('').reverse().join('');
  }

  return (
    <div className='header-container'>
      <Link className='header-logo-link' to='/'>
        <img src={logoImg} alt='header-logo' />
      </Link>

      <form className='header-search-box' onSubmit={(e) => searchFormSubmit(e)}>
        <FiSearch className='header-search-icon' />
        <input
          id='header-search-input'
          type='text'
          placeholder={`Search  ${formatNumberWithCommas(searchGames)} games`}
          value={searchValue}
          onChange={(e) => dispatch(searchActions.search(e.target.value))}
        />
        <button
          style={{
            opacity: searchValue.length !== 0 ? '0.8' : '0',
          }}
          type='button'
          onClick={() => dispatch(searchActions.search(''))}
          className='header-search-remove'
        >
          <TiDelete className='header-TiDelete' />
        </button>
      </form>
      <div>
        <Link to='/login'>로그인</Link>
      </div>
    </div>
  );
};

export default Header;
