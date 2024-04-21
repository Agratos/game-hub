import '../MainPage/MainPage.style.css';

import React, { useEffect, useState } from 'react';
import { useGameSearchQuery } from '../../hooks/apis/useGameSearch';
import { Col, Container } from 'react-bootstrap';
import ContentsCard from '../MainPage/components/ContentsCard/ContentsCard';
import FilterPlatfomrsDropdown from '../MainPage/components/FilterPlatformsDropdown/FilterPlatfomrsDropdown';
import OrderByDropdown from '../MainPage/components/OrderByDropdown/OrderByDropdown';
import { useSearchParams } from 'react-router-dom';

// LoadingSpinner 추가 코드
import LoadingSpinner from '../../commons/LoadingSpinner/LoadingSpinner';
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

const SearchPage = () => {
  const [isDataList, setIsDataList] = useState([]);
  const [query] = useSearchParams();

  // LoadingSpinner 추가 코드 -> isLoading
  const { data, isLoading, isSuccess, isError, error } = useGameSearchQuery({
    query: query.get('query'),
  });
  // isSuccess && console.log('여기는 메인 페이지 DATA : ',data, isSuccess);
  if (isError) {
    console.log(error);
  }

  console.log(`data`, data);

  useEffect(() => {
    // data 가 array인지 확인해야 스프레드 문법 사용 가능.
    if (Array.isArray(data) && isSuccess) {
      if (isDataList.length !== 0) {
        setIsDataList([...isDataList, ...data]);
      } else {
        setIsDataList([...data]);
      }
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  // LoadingSpinner 추가 코드
  if (isLoading) {
    return <LoadingSpinner />;
  }
  // LoadingSpinner 추가 코드

  return (
    <Container className='mainpage-area'>
      <div>
        <h1 className='fw-bold'>New and trending</h1>
        <span>Based on player counts and release date</span>
      </div>
      <div className='main-page-dropdown-area'>
        <OrderByDropdown ORDER_ARR={ORDER_ARR} />
        <FilterPlatfomrsDropdown />
      </div>
      <div className='mainpage-card-contents-area'>
        {isDataList.length !== 0 &&
          isDataList?.map((item, index) => (
            <Col className='mainpage-card-contents-box' key={index}>
              <ContentsCard item={item} />
            </Col>
          ))}
      </div>
    </Container>
  );
};

export default SearchPage;
