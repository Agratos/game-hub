import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TopGameCard from './component/TopGameCard/TopGameCard';
import { useTopGameListQuery } from '../../hooks/apis/useTopGameList';

const TopGamePage = () => {
  const { data, isLoading, isError, error } = useTopGameListQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <Swiper spaceBetween={30} slidesPerView={3} centeredSlides={true}>
      {data.results.map((game, index) => (
        <SwiperSlide key={index}>
          <TopGameCard game={game} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopGamePage;
