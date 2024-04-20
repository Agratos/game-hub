import React, { useEffect, useState } from 'react';
// import { data } from './data';
import './DetailPage.style.css';
import { useGameScreenShotsQuery } from '../../hooks/apis/useGameScreenShots';
import { Button, Spinner } from 'react-bootstrap';
import { IoAddCircle } from 'react-icons/io5';
import { useGameTrailerQuery } from '../../hooks/apis/useGameTrailer';
import { FaBan, FaMeh, FaRegGrinHearts, FaRegThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useGameDetailQuery } from '../../hooks/apis/useGameDetail.js';
import MoreImageModal from './component/MoreImageModal.js';

const DetailPage = () => {
  const { id } = useParams();
  console.log('디테일/id :', id);

  const { data: detailData, isLoading: detailLoading } = useGameDetailQuery({
    id,
  });
  console.log('디테일데이터', detailData);
  // const detailData = data;
  //위 두개 중 하나만 쓰기

  const [viewAllAbout, setViewAllAbout] = useState(false);
  const { data: trailerData, isLoading: trailerLoading } = useGameTrailerQuery({
    id,
  });
  console.log('트레일러데이터', trailerData?.results);

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
      let voteTitle = detailData?.ratings.find(
        (e) => e.id === detailData?.rating_top
      )?.title;
      let setIndex = voteName.indexOf(voteTitle);
      setVoteIndex(setIndex);
    }
  }, [detailLoading]);

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
                            <div className='detail-media-item-overay'>more</div>
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
            <div className='datail-name'>{detailData?.name}</div>
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
              {voteName.map((e, index) => {
                let percent =
                  detailData.ratings?.find((rating) => rating.title === e)
                    ?.percent ?? 0;
                console.log(percent);
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
                  <button className='detail-rating-btn' key={index}>
                    <div
                      className='detail-rating-color'
                      style={{ color: `${bgColor[index]}` }}
                    >
                      {voteIcon[index]}
                    </div>
                    <div style={{ fontWeight: 'bold' }}>{e}</div>
                    <div style={{ color: 'gray' }}>
                      {detailData?.ratings?.find((rating) => rating.title === e)
                        ?.count ?? 0}
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
    return <Spinner />;
  }
};

export default DetailPage;
