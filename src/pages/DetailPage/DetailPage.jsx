<<<<<<< Updated upstream
import React, { useState } from 'react';
// import { data } from './data';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import './DetailPage.style.css';
import { useGameScreenShotsQuery } from '../../hooks/apis/useGameScreenShots';
import { Button, Spinner } from 'react-bootstrap';
import { IoAddCircle } from 'react-icons/io5';
import { useGameTrailerQuery } from '../../hooks/apis/useGameTrailer';
import { FaBan, FaMeh, FaRegGrinHearts, FaRegThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useGameDetailQuery } from '../../hooks/apis/useGameDetail.js';

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data: detailData, isLoading: detailLoading } = useGameDetailQuery({
    id,
  });
  console.log('디테일데이터', detailData);

  const [viewAllAbout, setViewAllAbout] = useState(false);
  const { data: trailerData, isLoading: trailerLoading } = useGameTrailerQuery({
    id,
  });
  console.log('트레일러데이터', trailerData?.results);

  const bgColor = ['green', 'blue', 'yellow', 'red'];
  const voteIcon = [
    <FaRegGrinHearts key={'FaRegGrinHearts'} />,
    <FaRegThumbsUp key={'FaRegThumbsUp'} />,
    <FaMeh key={'FaMeh'} />,
    <FaBan key={'FaBan'} />,
  ];

  const { data: screenShotsData, isLoading: screenShotLoading } =
    useGameScreenShotsQuery({ game_pk: id });
  console.log('스크린샷불러온거 :', screenShotsData?.results);

  if (!detailLoading && !trailerLoading && !screenShotLoading) {
    return (
      <div className='detail-bg'>
        <div className='detail-section-1'>
          <div className='detail-section-1-1'>
            <div className='detail-media-container'>
              {screenShotsData?.results.map((e, index) => {
                if (index > 3) {
                  return;
                } else {
                  return (
                    <div className='detail-media-item-box' key={index}>
                      {index === 3 ? (
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
                }
              })}
            </div>
          </div>

          <div className='detail-section-1-2'>
            <div className='datail-name'>{detailData?.name}</div>
            <div className='detail-rank-add'>
              <div className='detail-rank'>
                <div>
                  {
                    detailData?.ratings.find(
                      (e) => e.id === detailData?.rating_top
                    ).title
                  }
                </div>
                <h6>
                  {detailData?.rating} / 5 point{' '}
                  <span style={{ color: 'gray' }}>
                    ({detailData?.ratings_count.toLocaleString()} votes)
                  </span>
                </h6>
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
              {detailData?.ratings.map((e, index) => {
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
              {detailData?.ratings.map((e, index) => {
                return (
                  <button className='detail-rating-btn' key={index}>
                    <div
                      className='detail-rating-color'
                      style={{ color: `${bgColor[index]}` }}
                    >
                      {voteIcon[index]}
                    </div>
                    <div style={{ fontWeight: 'bold' }}>{e.title}</div>
                    <div style={{ color: 'gray' }}>
                      {e.count.toLocaleString()}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className='detail-about'>
              <h4>About</h4>
              {viewAllAbout
                ? detailData?.description.replace(/<[^>]*>?/gm, '')
                : detailData?.description
                    .replace(/<[^>]*>?/gm, '')
                    .slice(0, 300) + '...'}
              <button
                className='detail-about-more-btn'
                onClick={() => setViewAllAbout(!viewAllAbout)}
              >
                {!viewAllAbout ? '▼Read more' : '▲Show less'}
              </button>
            </div>
          </div>
        </div>
        <div className='detail-section-2'></div>
      </div>
    );
  } else {
    return (
      <div className='detail-spinner-bg'>
        <h1>Loading...</h1>
        <Spinner />
      </div>
    );
  }
};

export default DetailPage;
