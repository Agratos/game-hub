import "./MainPage.style.css"

import React, { useEffect, useState } from 'react';
import { useGameListPaginationQuery } from '../../hooks/apis/useGameListPagination';
import { Button, Col, Container } from 'react-bootstrap';
import ContentsCard from './components/ContentsCard/ContentsCard';
import FilterPlatfomrsDropdown from './components/FilterPlatformsDropdown/FilterPlatfomrsDropdown';
import OrderByDropdown from './components/OrderByDropdown/OrderByDropdown';
import { useSearchParams } from "react-router-dom";


const ORDER_ARR = ["rating","released","added", "created", "updated", "name", "metacritic"];


const MainPage = () => {
  const [isDataList, setIsDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [query,] = useSearchParams();

  const {data,isSuccess,isError,error} = useGameListPaginationQuery({page:page, ordering: query.get("ordering") ? query.get("ordering") : ORDER_ARR[0]});
  // isSuccess && console.log('여기는 메인 페이지 DATA : ',data);

  if(isError){
    console.log(error);
  }

  const handlePagination = () => {
    setPage(page+1);
  }

  useEffect(() => {
    // data 가 array인지 확인해야 스프레드 문법 사용 가능.
    if(Array.isArray(data) && isSuccess){
      if(isDataList.length !== 0){
        setIsDataList([...isDataList, ...data]);
      } else {
        setIsDataList([...data]);
      }
    }
  // eslint-disable-next-line
  }, [isSuccess])




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
        {isDataList.length !== 0 && isDataList?.map((item, index) => 
        <Col className="mainpage-card-contents-box" key={index}>
          <ContentsCard item={item}/>
        </Col>
        )}
      </div>
      {isSuccess && <Button onClick={() => handlePagination()}>Add List</Button>}
    </Container>;
};

export default MainPage;