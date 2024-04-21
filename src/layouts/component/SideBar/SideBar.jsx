import React from 'react';
import './SideBar.style.css';
import { useNavigate } from 'react-router-dom';
// import Signs from '../Header/Signs/Signs';
import Signs from '../Signs/Signs';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { hamburgerActions } from '../../../store/slice/hamburgerMenuOpen';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sideBarList = [
    'Home',
    'Reviews',
    'New Releases',
    'top',
    'All Games',
    'Browse',
    'Platforms',
    'Genres',
  ];
  console.log(sideBarList);
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-signs'>
        <Signs />
      </ul>
      <button
        className='sidebar-m-menu-close'
        onClick={() => dispatch(hamburgerActions.setHamburgerOn(false))}
      >
        <IoCloseCircleSharp className='sidebar-m-menu-close-ic' />
      </button>
      <ul className='sidebar-list'>
        <li>
          <button
            className='side-topgame-link-item'
            onClick={() => navigate('/top-game')}
          >
            Rate top gamesx
          </button>
        </li>
        {sideBarList.map((item, index) => (
          <li className='sidebar-list-item' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
