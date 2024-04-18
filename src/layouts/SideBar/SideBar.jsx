import React from 'react';
import './SideBar.style.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
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
    <div
      style={{
        color: '#fff',
      }}
    >
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
