import React, { useEffect } from 'react';
import TopGameCard from './component/TopGameCard/TopGameCard';
import axios from 'axios';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
import './TopGamePage.style.css';
import ShareLink from './component/ShareLink/ShareLink';
import HowItWorks from './component/HowItWorks/HowItWorks';
import FavoriteGames from './component/FavoriteGames/FavoriteGames';
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';

const TopGamePage = () => {
  const [allGameList, setAllGameList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const [countToFetch, setCountToFetch] = useState(0);
  const favGamesList = useSelector((state) => state.score.favGames);
  const scoredGames = useSelector((state) => state.score.scoredGames);
  let topGameList = [];
  const getTopGameList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://api.rawg.io/api/games', {
        params: {
          page: 1,
          page_size: 20,
          key: process.env.REACT_APP_GAME_API,
        },
      });
      topGameList = [...res.data.results];
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setAllGameList(topGameList);
  };
  const slideChange = (e) => {
    if (e.swipeDirection === 'next') {
      setCountToFetch(countToFetch + 1);
    }
  };

  useEffect(() => {
    getTopGameList();
  }, []);
  useEffect(() => {
    setBarHeight(0.15 * scoredGames);
    const fetchMoreData = async () => {
      for (let i = 1; i <= 4; i++) {
        if (countToFetch === 20 * i - 10) {
          try {
            const res = await axios.get('https://api.rawg.io/api/games', {
              params: {
                page: i + 1,
                page_size: 20,
                key: process.env.REACT_APP_GAME_API,
              },
            });
            topGameList = [...allGameList, ...res.data.results];
            setAllGameList(topGameList);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    fetchMoreData();
  }, [scoredGames, countToFetch]);

  if (isLoading) {
    return (
      <div style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className='topGamePageWrap'>
      <h2>Rate The Best Games!</h2>
      <div className='scoredNum'>
        <div className='progressBar' style={{ height: barHeight }}></div>
        You rated <span>{scoredGames}</span> out of 100 Games
      </div>

      <Swiper
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={20}
        onSlideChange={slideChange}
      >
        {allGameList?.map((game, index) => (
          <SwiperSlide key={index}>
            <TopGameCard
              game={game}
              allGameList={allGameList}
              setAllGameList={setAllGameList}
              setBarHeight={setBarHeight}
              setCountToFetch={setCountToFetch}
              countToFetch={countToFetch}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ShareLink />
      <HowItWorks />
      <div
        className='fv-wrapper'
        style={{
          width: '798px',
          margin: 'auto',
          border: '2px solid hsla(0, 0%, 100%, 0.1)',
        }}
      >
        <h2>What You Liked :</h2>
        <FavoriteGames favGamesList={favGamesList} />
      </div>
    </div>
  );
};

export default TopGamePage;
