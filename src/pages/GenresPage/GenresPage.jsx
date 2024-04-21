import './GenresPage.style.css';

import React, { useEffect, useRef, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import ContentsCard from './components/ContentsCard/ContentsCard';
import FilterPlatfomrsDropdown from './components/FilterPlatformsDropdown/FilterPlatfomrsDropdown';
import OrderByDropdown from './components/OrderByDropdown/OrderByDropdown';
import { useSearchParams } from 'react-router-dom';

// LoadingSpinner 추가 코드
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';
import {
  useGameGenresQuery,
  useGameListGenresPaginationQuery,
} from '../../hooks/apis/useGameGenres';
import GenreList from './components/GenreList/GenreList';
// LoadingSpinner 추가 코드

const ORDER_ARR = [
  'rating',
  'released',
  'added',
  'created',
  'updated',
  'name',
  'metacritic',
];

const GenresPage = () => {
  const [isDataList, setIsDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [isViewBtn, setIsViewBtn] = useState(true);

  const [query] = useSearchParams();

  const buttonRef = useRef(null);

  const { data: genresData } = useGameGenresQuery();
  const { data, isLoading, isSuccess, isError, error } =
    useGameListGenresPaginationQuery({
      page: page,
      ordering: query.get('ordering') ? query.get('ordering') : ORDER_ARR[0],
      platforms: query.get('parent_platforms')
        ? query.get('parent_platforms')
        : null,
      genre: query.get('genre') ? query.get('genre') : null,
    });
  // isSuccess && console.log('여기는 메인 페이지 DATA : ',page,data);
  const handlePagination = () => {
    setPage(page + 1);
  };

  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    // data 가 array인지 확인해야 스프레드 문법 사용 가능.
    if (Array.isArray(data) && isSuccess) {
      if (isDataList.length !== 0) {
        setIsDataList([...isDataList, ...data]);
      } else {
        setIsDataList([...data]);
      }

      setTimeout(() => {
        // console.log('btn set');
        setIsViewBtn(true);
      }, 1000);
    }

    if (!isSuccess) {
      setIsViewBtn(false);
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (Array.isArray(data) && isSuccess) {
      setPage(1);
      setIsDataList([...data]);
    } else {
      setPage(1);
      setIsDataList([]);
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // console.log('new load', page);
          if (isSuccess) {
            setPage(page + 1);
          }
        }
      },
      {
        root: null, // 뷰포트를 root로 사용
        rootMargin: '0px',
        threshold: 0.0, // 100% 요소가 보여질 때 트리거
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current); // 버튼을 관찰 대상으로 추가
    }

    return () => {
      if (buttonRef.current) {
        // eslint-disable-next-line
        observer.unobserve(buttonRef.current); // 컴포넌트가 언마운트될 때 관찰 중단
      }
    };
    // eslint-disable-next-line
  }, [isViewBtn]);

  return (
    <Container className='mainpage-area' style={{ marginTop: '32px' }}>
      <div>
        <h1 className='fw-bold Mainpage-title'>Game Genres</h1>
        <GenreList genres={genresData} ORDER_ARR={ORDER_ARR} />
      </div>
      <div className='main-page-dropdown-area'>
        <OrderByDropdown ORDER_ARR={ORDER_ARR} />
        <FilterPlatfomrsDropdown ORDER_ARR={ORDER_ARR} />
      </div>
      <div className='mainpage-card-contents-area mb-5 '>
        {isDataList?.length !== 0 &&
          isDataList?.map((item, index) => (
            <Col className='mainpage-card-contents-box' key={index}>
              <ContentsCard item={item} />
            </Col>
          ))}
      </div>
      <div className='d-flex justify-content-center' style={{ width: '100%' }}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          isViewBtn && (
            <button
              ref={buttonRef}
              className='mb-5 mainpage-reload-btn'
              onClick={() => handlePagination()}
            >
              Load more
            </button>
          )
        )}
        {isError && (
          <button
            className='mb-5 mainpage-reload-btn'
            onClick={() => handlePagination()}
          >
            Load more
          </button>
        )}
      </div>
    </Container>
  );
};

export default GenresPage;
