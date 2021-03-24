import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = ({ setStatus }) => {
  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <Dropdown className="m-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Plants
      </Dropdown.Toggle>

      <Dropdown.Menu onSelect={statusHandler}>
        <Dropdown.Item href="#/action-1" value="all">
          All Plants
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" value="tough">
          Hard to Kill
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" value="lover">
          Shade Lovers
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
