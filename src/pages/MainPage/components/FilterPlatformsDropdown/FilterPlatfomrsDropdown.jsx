import React from 'react'
import { Dropdown } from 'react-bootstrap'

const FilterPlatfomrsDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className='p-1'>
        <span style={{fontSize: "0.8rem"}}>Platforms</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default FilterPlatfomrsDropdown