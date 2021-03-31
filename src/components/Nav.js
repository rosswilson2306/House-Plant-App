import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="m-2 display-4">Pot Plants</p>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/about">
              <p className="m-2">About</p>
            </Link>
            <Link to="/shop">
              <p className="m-2">Shop</p>
            </Link>
            <Link to="/find">
              <p className="m-2">Find Us</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
