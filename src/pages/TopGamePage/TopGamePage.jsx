import React, { useEffect } from 'react';
import TopGameCard from './component/TopGameCard/TopGameCard';
import axios from 'axios';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TopGamePage = () => {
  const [allGameList, setAllGameList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let topGameList = [];
  const getTopGameList = async () => {
    setIsLoading(true);
    try {
      for (let i = 1; i <= 4; i++) {
        const res = await axios.get('https://api.rawg.io/api/games', {
          params: {
            page: i,
            page_size: 25,
            key: process.env.REACT_APP_GAME_API,
          },
        });
        topGameList = [...topGameList, ...res.data.results];
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setAllGameList(topGameList);
  };

  useEffect(() => {
    getTopGameList();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={20}>
      {allGameList?.map((game, index) => (
        <SwiperSlide key={index}>
          <TopGameCard
            game={game}
            allGameList={allGameList}
            setAllGameList={setAllGameList}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopGamePage;
