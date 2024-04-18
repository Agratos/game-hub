import React from 'react';
import { data } from './data';
import './DetailPage.style.css';
import { useGameScreenShotsQuery } from '../../hooks/apis/useGameScreenShots';
import { Button } from 'react-bootstrap';
import { IoAddCircle } from 'react-icons/io5';
// import { useGameTrailerQuery } from '../../hooks/apis/useGameTrailer';
// import { Alert } from 'bootstrap';
// import { useGameListQuery } from '../../hooks/apis/useGameList.js';

const DetailPage = () => {
  // const { data: trailerData, isLoading } = useGameTrailerQuery({ id: 3498 });
  // console.log(isLoading);
  // console.log('트레일러데이터', trailerData);
  //
  const bgColor = ['green', 'blue', 'yellow', 'red'];
  const { data: screenShotsData } = useGameScreenShotsQuery({ game_pk: 3328 });
  console.log('스크린샷불러온거 :', screenShotsData);

  const trailerData = [
    {
      results: {
        data: {
          480: 'https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4',
          max: 'https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4',
        },
      },
    },
  ];

  console.log('트레일러영상 링크 :', trailerData[0].results.data.max);

  const fakeData = data.results[1];
  console.log(fakeData.slug);

  return (
    <div className='detail-bg'>
      <div className='detail-section-1'>
        <div className='detail-section-1-1'>
          <div className='detail-media-container'>
            {fakeData.short_screenshots?.map((e, index) => {
              return (
                <div className='detail-media-item-box' key={index}>
                  {fakeData.short_screenshots.length - 1 === index ? (
                    <div
                      className='detail-media-item '
                      style={{ backgroundImage: `url(${e.image})` }}
                    >
                      <div className='detail-media-item-overay'>more</div>
                    </div>
                  ) : (
                    <div
                      className='detail-media-item'
                      style={{ backgroundImage: `url(${e.image})` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className='detail-section-1-2'>
          <div className='datail-name'>{fakeData.name}</div>
          <div className='detail-rank-add'>
            <div className='detail-rank'>
              {fakeData.rating}({fakeData.ratings_count})
              <span> {fakeData.rating_top.toLocaleString()} RATINGS</span>
            </div>
            <div className='detail-add'>
              <Button
                variant='light'
                style={{
                  textAlign: 'left',
                  width: '150px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                }}
              >
                <p style={{ fontSize: '10px', color: 'gray' }}>Add to</p>
                <p>My games</p>
                <IoAddCircle
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '-12px',
                    width: '50px',
                    height: '50px',
                    color: 'green',
                  }}
                />
              </Button>
            </div>
          </div>
          <div className='detail-rating-bar'>
            {fakeData.ratings.map((e, index) => {
              return (
                <div
                  style={{
                    width: `${e.percent}%`,
                    background: `${bgColor[index]}`,
                  }}
                  key={index}
                ></div>
              );
            })}
          </div>
          <div className='detail-rating-count'>
            {fakeData.ratings.map((e, index) => {
              return (
                <button className='detail-rating-btn' key={index}>
                  <div
                    className='detail-rating-color'
                    style={{ background: `${bgColor[index]}` }}
                  ></div>
                  <div style={{ fontWeight: 'bold' }}>{e.title}</div>
                  <div style={{ color: 'gray' }}>{e.count}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className='detail-section-2'></div>
    </div>
  );
};

export default DetailPage;
