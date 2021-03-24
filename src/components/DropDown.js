import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = ({ setStatus }) => {
  const statusHandler = e => {
    setStatus(e);
  };

  return (
    <Dropdown className="m-3" onSelect={statusHandler}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Plants
      </Dropdown.Toggle>

      <Dropdown.Menu onSelect={statusHandler}>
        <Dropdown.Item
          href="#/action-1"
          value="all"
          eventKey="all"
          onClick={statusHandler}
        >
          All Plants
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" value="tough" eventKey="tough">
          Hard to Kill
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" value="lover" eventKey="lover">
          Shade Lovers
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
