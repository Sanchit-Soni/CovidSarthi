import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="icon">
          <img
            className="icon-image"
            src="https://www.flaticon.com/svg/vstatic/svg/2966/2966327.svg?token=exp=1619949980~hmac=6c0dd5f12c3f411fe9ea8c15aec48a28"
          ></img>
        </div>
        <div className="head-text">
          <h1>CovidSarthi.</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
