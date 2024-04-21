import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { PLATFORMS } from '../../../../constants/platformsData';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterPlatfomrsDropdown = ({ ORDER_ARR }) => {
  const navigate = useNavigate();
  const [query] = useSearchParams();

  const goOrdering = (item) => {
    if (query.get('ordering')) {
      if (query.get('genre')) {
        navigate(
          `?ordering=${query.get('ordering')}&parent_platforms=${item}&genre=${query.get('genre')}`
        );
      } else {
        navigate(`?ordering=${query.get('ordering')}&parent_platforms=${item}`);
      }
    } else {
      if (query.get('genre')) {
        navigate(
          `?ordering=${ORDER_ARR[0]}&parent_platforms=${item}&genre=${query.get('genre')}`
        );
      } else {
        navigate(`?ordering=${ORDER_ARR[0]}&parent_platforms=${item}`);
      }
    }
  };

  const findName = () => {
    let result = PLATFORMS.filter(
      (el) => el.id === Number(query.get('parent_platforms'))
    );
    console.log(result);
    return result[0].name;
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='dark' id='dropdown-basic' className='p-1'>
        <span style={{ fontSize: '0.8rem' }}>
          {query.get('parent_platforms') ? findName() : 'Platforms'}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {PLATFORMS.map((item, index) => (
          <Dropdown.Item onClick={() => goOrdering(item.id)} key={index}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterPlatfomrsDropdown;
