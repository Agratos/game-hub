import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import './Header.style.css';
// import logoImg from './img/logo.svg';
import logoImg from '../../img/logo.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { searchActions } from '../../../store/slice/searchValueSlice';
import { hamburgerActions } from '../../../store/slice/hamburgerMenuOpen';

import { useGameListQuery } from '../../../hooks/apis/useGameList';
import { RxHamburgerMenu } from 'react-icons/rx';

import Signs from '../Signs/Signs';

const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchGames, setSearchGames] = useState(0);

  const searchValue = useSelector((state) => state.search.searchValue);
  const hamburgerOn = useSelector((state) => state.hamburger.hamburgerOn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // search form submit 실행함수
  const searchFormSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
    dispatch(searchActions.search(''));
  };
  // 게임리스트 데이터
  const { data } = useGameListQuery();
  useEffect(() => {
    setSearchGames(data?.count);
    console.log('123131', hamburgerOn);
  }, [data, hamburgerOn]);

  // 3의배수 , 찍어주는 함수
  function formatNumberWithCommas(number) {
    // number가 유효한 숫자인지 확인
    if (number === undefined || number === null) {
      return '0'; // 또는 적절한 기본값 또는 오류 메시지 반환
    }

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

      <form
        className='header-search-box'
        onSubmit={(e) => searchFormSubmit(e)}
        style={{
          border: searchFocus ? '2px solid #0066cc' : 'none',
          backgroundColor: searchFocus ? '#3b3b3b' : '#7676803d',
        }}
      >
        <FiSearch className='header-search-icon' />
        <input
          id='header-search-input'
          type='text'
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          placeholder={`Search  ${formatNumberWithCommas(searchGames)} games`}
          value={searchValue}
          onChange={(e) => dispatch(searchActions.search(e.target.value))}
          style={{
            color: searchValue.length !== 0 ? '#fff' : '#ebebf599',
          }}
        />
        <button
          style={{
            opacity: searchValue.length !== 0 ? '1' : '0',
          }}
          type='button'
          onClick={() => dispatch(searchActions.search(''))}
          className='header-search-remove'
        >
          <TiDelete className='header-TiDelete' />
        </button>
      </form>
      <button
        className='m-header-menubar'
        onClick={() => dispatch(hamburgerActions.setHamburgerOn(true))}
      >
        <RxHamburgerMenu className='m-header-hbg' />
      </button>
      <ul className='sign-box'>
        <Signs />
      </ul>
    </div>
  );
};

export default Header;
