import React from 'react';
import './SideBar.style.css';
import { Link } from 'react-router-dom';
import Signs from '../Signs/Signs';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { hamburgerActions } from '../../store/slice/hamburgerMenuOpen';

const SideBar = () => {
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
    <div className='slidebar-container'>
      <ul className='sidebar-signs'>
        <Signs />
      </ul>
      <button
        className='sidebar-m-menu-close'
        onClick={() => dispatch(hamburgerActions.setHamburgerOn(false))}
      >
        <IoCloseCircleSharp className='sidebar-m-menu-close-ic' />
      </button>
      <ul className='slidebar-list'>
        <li>
          <Link to='/top-game'>Rate top games</Link>
        </li>
        {sideBarList.map((item, index) => (
          <li className='slidebar-list-item' key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
