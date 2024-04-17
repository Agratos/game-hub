import "./MainPage.style.css"

import React from 'react';
import { useGameListPaginationQuery } from '../../hooks/apis/useGameListPagination';
import { Col, Container, Row } from 'react-bootstrap';
import ContentsCard from './components/ContentsCard/ContentsCard';
import FilterPlatfomrsDropdown from './components/FilterPlatformsDropdown/FilterPlatfomrsDropdown';
import OrderByDropdown from './components/OrderByDropdown/OrderByDropdown';
import { useSearchParams } from "react-router-dom";


const ORDER_ARR = ["rating","released","added", "created", "updated", "name", "metacritic"];


const MainPage = () => {
  const [query,] = useSearchParams();

  const {data} = useGameListPaginationQuery({page:1, ordering: query.get("ordering") ? query.get("ordering") : ORDER_ARR[0]});
  console.log('여기는 메인 페이지 DATA : ',data);

  return <Container>
      <h1 className='fw-bold'>New and trending</h1>
      <span>Based on player counts and release date</span>
      <div className='main-page-dropdown-area'>
        <OrderByDropdown ORDER_ARR={ORDER_ARR}/>
        <FilterPlatfomrsDropdown/>
      </div>
      <Row>
        {data?.map((item, index) => 
        <Col xl={3} lg={4} md={6} sm={12}  key={index}>
          <ContentsCard item={item}/>
        </Col>
        )}
      </Row>
    </Container>;
};

export default MainPage;