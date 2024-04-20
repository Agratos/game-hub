import React from 'react';
import './NotFoundPage.style.css';
import Header from '../../layouts/component/Header/Header';
import { useNavigate } from 'react-router-dom';
import { TbWorldSearch } from 'react-icons/tb';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='notfound-container'>
      <Header />
      <div className='notfoun-box'>
        <TbWorldSearch className='notfound-icon' />

        <h2 className='notfound-text'>
          The page you’re looking <br /> for can’t be found.
        </h2>
        <button className='notfound-bt' onClick={() => navigate('/')}>
          <span>Main page</span>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
