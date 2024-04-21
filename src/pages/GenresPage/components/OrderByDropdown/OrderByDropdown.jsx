import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OrderByDropdown = ({ ORDER_ARR }) => {
  // console.log(ORDER_ARR);
  const navigate = useNavigate();
  const [query] = useSearchParams();

  const handleFirstCharUpper = (item) => {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
  };

  const goOrdering = (item) => {
    if (query.get('parent_platforms')) {
      if (query.get('genre')) {
        navigate(
          `?ordering=${item}&parent_platforms=${query.get('parent_platforms')}&genre=${query.get('genre')}`
        );
      } else {
        navigate(
          `?ordering=${item}&parent_platforms=${query.get('parent_platforms')}`
        );
      }
    } else {
      if (query.get('genre')) {
        navigate(`?ordering=${item}&genre=${query.get('genre')}`);
      } else {
        navigate(`?ordering=${item}`);
      }
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ backgroundColor: '#242426' }}
        variant='dark'
        id='dropdown-basic'
        className='p-1'
      >
        <span style={{ fontSize: '0.8rem' }}>
          Order By:{' '}
          {query.get('ordering')
            ? handleFirstCharUpper(query.get('ordering'))
            : handleFirstCharUpper(ORDER_ARR[0])}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {ORDER_ARR.map((item, index) => (
          <Dropdown.Item onClick={() => goOrdering(item)} key={index}>
            {handleFirstCharUpper(item)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OrderByDropdown;
