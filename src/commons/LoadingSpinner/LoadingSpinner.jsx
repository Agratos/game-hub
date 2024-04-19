import React from 'react';
import loadingSpinnerImg from './img/LoadingSpinner.svg';
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-box'>
      <img className='loading-spinner' src={loadingSpinnerImg} alt='로딩 중' />
    </div>
  );
};

export default LoadingSpinner;
