import React from 'react';
import { Alert } from 'bootstrap';
import { useGameListQuery } from '../../hooks/apis/useGameList.js';

const DetailPage = () => {

  const { data, isLoading, isError, error } = useGameListQuery()

  if (isLoading) {
    return;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log(data)

  return <div>DetailPage Test2</div>;
};

export default DetailPage;
