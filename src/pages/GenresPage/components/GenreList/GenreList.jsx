import React from 'react';
import './GenreList.style.css';

import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GenreList = ({ genres, ORDER_ARR }) => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  console.log(typeof query.get('genre'));

  const goGenre = (item) => {
    if (query.get('ordering')) {
      if (query.get('parent_platforms')) {
        navigate(
          `?ordering=${query.get('ordering')}&parent_platforms=${query.get('parent_platforms')}&genre=${item}`
        );
      } else {
        navigate(`?ordering=${query.get('ordering')}&genre=${item}`);
      }
    } else {
      navigate(`?ordering=${ORDER_ARR[0]}&genre=${item}`);
    }
  };

  return (
    <div className='genre-list-area'>
      {genres?.map((el, index) => (
        <Button
          variant={Number(query.get('genre')) === el.id ? 'light' : 'dark'}
          onClick={() => goGenre(el.id)}
          key={index}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
};

export default GenreList;
