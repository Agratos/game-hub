import "./MainPage.style.css"

import React from 'react';
import { useGameListPaginationQuery } from '../../hooks/apis/useGameListPagination';
import { Col, Container } from 'react-bootstrap';
import ContentsCard from './components/ContentsCard/ContentsCard';
import FilterPlatfomrsDropdown from './components/FilterPlatformsDropdown/FilterPlatfomrsDropdown';
import OrderByDropdown from './components/OrderByDropdown/OrderByDropdown';
import { useSearchParams } from "react-router-dom";


const ORDER_ARR = ["rating","released","added", "created", "updated", "name", "metacritic"];


const MainPage = () => {
  const [query,] = useSearchParams();

  const {data} = useGameListPaginationQuery({page:1, ordering: query.get("ordering") ? query.get("ordering") : ORDER_ARR[0]});
  console.log('여기는 메인 페이지 DATA : ',data);

  return <Container className="mainpage-area">
      <div>
        <h1 className='fw-bold'>New and trending</h1>
        <span>Based on player counts and release date</span>
      </div>
      <div className='main-page-dropdown-area'>
        <OrderByDropdown ORDER_ARR={ORDER_ARR}/>
        <FilterPlatfomrsDropdown/>
      </div>
      <div className="mainpage-card-contents-area">
        {data?.map((item, index) => 
        <Col className="mainpage-card-contents-box"  key={index}>
          <ContentsCard item={item}/>
        </Col>
        )}
      </div>
    </Container>;
};

export default MainPage;