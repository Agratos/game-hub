import React, { useEffect, useState } from 'react';
import './DetailPage.style.css';
// import { Button, Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IoAddCircle } from 'react-icons/io5';
import { FaBan, FaMeh, FaRegGrinHearts, FaRegThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useGameScreenShotsQuery } from '../../hooks/apis/useGameScreenShots';
import { useGameTrailerQuery } from '../../hooks/apis/useGameTrailer';
import { useGameDetailQuery } from '../../hooks/apis/useGameDetail.js';
import MoreImageModal from './component/MoreImageModal.js';
import '../MainPage/components/ContentsCard/ContentsCard.style.css';
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';

const DetailPage = () => {
  const { id } = useParams();
  console.log('디테일/id :', id);

  const { data: detailData, isLoading: detailLoading } = useGameDetailQuery({
    id,
  });
  console.log('디테일데이터', detailData);

  const [viewAllAbout, setViewAllAbout] = useState(false);
  const { data: trailerData, isLoading: trailerLoading } = useGameTrailerQuery({
    id,
  });
  console.log('트레일러데이터', trailerData?.results);

  const [pickRate, setPickRate] = useState();
  const [count, setCount] = useState(0);
  const bgColor = ['green', 'blue', 'yellow', 'red'];
  const voteName = ['exceptional', 'recommended', 'meh', 'skip'];
  const voteIcon = [
    <FaRegGrinHearts key={'FaRegGrinHearts'} />,
    <FaRegThumbsUp key={'FaRegThumbsUp'} />,
    <FaMeh key={'FaMeh'} />,
    <FaBan key={'FaBan'} />,
  ];

  const [voteIndex, setVoteIndex] = useState(0);
  const [moreImageModal, setMoreImageModal] = useState(false);
  const [selectImageIndex, setSelectImageIndex] = useState(0);

  useEffect(() => {
    if (!detailLoading) {
      let voteTitle = detailData.ratings.find(
        (e) => e.id === detailData?.rating_top
      )?.title;
      let setIndex = voteName.indexOf(voteTitle);
      setVoteIndex(setIndex);
    }
  }, [detailLoading, count, pickRate]);

  const { data: screenShotsData, isLoading: screenShotLoading } =
    useGameScreenShotsQuery({ game_pk: id });
  console.log('스크린샷불러온거 :', screenShotsData?.results);

  if (!detailLoading && !trailerLoading && !screenShotLoading) {
    return (
      <div className='detail-bg'>
        {moreImageModal ? (
          <MoreImageModal
            id={id}
            setMoreImageModal={setMoreImageModal}
            selectImageIndex={selectImageIndex}
          />
        ) : null}
        <div className='detail-section-container'>
          <div className='detail-section-1'>
            <div className='detail-section-1-1'>
              <div className='detail-media-container'>
                {screenShotsData?.results.map((e, index) => {
                  if (index > 3) {
                    return;
                  } else {
                    return (
                      <button
                        onClick={() => {
                          setMoreImageModal(true);
                          setSelectImageIndex(index);
                        }}
                        className='detail-media-item-box'
                        key={index}
                      >
                        {index === 3 ? (
                          <div
                            className='detail-media-item '
                            style={{ backgroundImage: `url(${e.image})` }}
                          >
                            {screenShotsData?.results.length <= 4 ? null : (
                              <div className='detail-media-item-overay'>
                                more
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            className='detail-media-item'
                            style={{ backgroundImage: `url(${e.image})` }}
                          />
                        )}
                      </button>
                    );
                  }
                })}
              </div>
            </div>

            <div className='detail-section-1-2'>
              <div className='datail-name'>
                {detailData?.name}
                <span className='platform-box' style={{ padding: '3px' }}>
                  {detailData?.parent_platforms.map((el, index) => (
                    <div
                      className={`platforms__platform_${el.platform.slug}`}
                      key={index}
                      style={{ width: '20px', height: '20px' }}
                    ></div>
                  ))}
                </span>
              </div>

              <div className='detail-rank-add'>
                <div className='detail-rank'>
                  <div>
                    <span style={{ color: `${bgColor[voteIndex]}` }}>
                      {voteIcon[voteIndex]}{' '}
                    </span>
                    {
                      detailData?.ratings?.find(
                        (e) => e.id === detailData?.rating_top
                      )?.title
                    }
                  </div>
                  <h6>
                    {detailData?.rating} / 5 point{' '}
                    <span style={{ color: 'gray' }}>
                      ({(detailData?.ratings_count + count).toLocaleString()}{' '}
                      votes)
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
                {voteName.map((e, index) => {
                  let percent =
                    detailData?.ratings?.find((rating) => rating.title === e)
                      ?.percent ?? 0;
                  // console.log(detailData?.ratings[index].count);
                  return (
                    <div
                      style={{
                        width: `${percent}%`,
                        background: `${bgColor[index]}`,
                      }}
                      key={index}
                    ></div>
                  );
                })}
              </div>
              <div className='detail-rating-count'>
                {voteName.map((e, index) => {
                  return (
                    <button
                      className='detail-rating-btn'
                      key={index}
                      onClick={() => {
                        setPickRate(index);
                        if (count === 1) {
                          alert('이미 투표했음');
                        } else {
                          setCount(count + 1);
                        }
                      }}
                    >
                      <div
                        className='detail-rating-color'
                        style={{ color: `${bgColor[index]}` }}
                      >
                        {voteIcon[index]}
                      </div>
                      <div style={{ fontWeight: 'bold' }}>{e}</div>
                      <div style={{ color: 'gray' }}>
                        {detailData?.ratings?.find(
                          (rating) => rating.title === e
                        )?.count + (index === pickRate ? count : 0) || 0}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className='detail-about'>
                <h3>
                  <b>About</b>
                </h3>
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
          <div className='detail-section-2'>
            {trailerData ? (
              <h3>
                <b>Game Trailers</b>
              </h3>
            ) : null}
            <div className='detail-trailers-box'>
              {trailerData.results?.map((e, index) => {
                return (
                  <div key={index} className='detail-trailer-card'>
                    <video controls poster={e.preview}>
                      <source src={e.data.max} type='video/mp4' />
                      <track kind='captions' />
                    </video>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='detail-spinner-bg'>
        {/* <h1>Loading...</h1> */}
        {/* <Spinner /> */}
        <LoadingSpinner />
      </div>
    );
  }
};

export default DetailPage;
