import React from 'react';
import { data } from './data';
import './DetailPage.style.css';
// import { useGameTrailerQuery } from '../../hooks/apis/useGameTrailer';
// import { Alert } from 'bootstrap';
// import { useGameListQuery } from '../../hooks/apis/useGameList.js';

const DetailPage = () => {
  // const { trailerData, isLoading } = useGameTrailerQuery({ id: 3328 });
  // console.log(isLoading);
  // console.log('트레일러데이터', trailerData);

  const fakeData = data.results[0];
  // console.log(fakeData.background_image);

  return (
    <div className='detail-bg'>
      <div className='detail-section-1'>
        <div className='detail-section-1-1'>
          <div className='detail-media-container'>
            {fakeData.short_screenshots?.map((e, index) => {
              console.log('ddd', e.image);
              return (
                <div className='detail-media-item-box' key={index}>
                  <div
                    className='detail-media-item'
                    style={{ backgroundImage: `url(${e.image})` }}
                  >
                    <div className='detail-media-retio'></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='detail-section-1-2'>
          <div className='datail-name'>{fakeData.name}</div>
        </div>
      </div>
      <div className='detail-section-2'></div>
    </div>
  );
};

export default DetailPage;
