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
import { Spinner } from 'react-bootstrap';

const TopGamePage = () => {
  const [allGameList, setAllGameList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
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

  const slideChange = async (e) => {
    const currentSlide = e.activeIndex;
    for (let i = 1; i <= 4; i++) {
      if (currentSlide === 20 * i - 3) {
        try {
          const res = await axios.get('https://api.rawg.io/api/games', {
            params: {
              page: i + 1,
              page_size: 20,
              key: process.env.REACT_APP_GAME_API,
            },
          });
          topGameList = [...allGameList, ...res.data.results];
        } catch (e) {
          console.log(e);
        }
        setAllGameList(topGameList);
      }
    }
  };

  useEffect(() => {
    getTopGameList();
  }, []);
  useEffect(() => {
    setBarHeight(0.15 * scoredGames);
  }, [scoredGames]);

  if (isLoading) {
    return (
      <div className='spinnerWrap'>
        <Spinner />
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ShareLink />
      <HowItWorks />
      <FavoriteGames favGamesList={favGamesList} />
    </div>
  );
};

export default TopGamePage;
