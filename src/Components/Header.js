import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import cvslogo from "../img/cvslogo.jpeg";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="icon">
          <img className="icon-image" src={cvslogo}></img>
        </div>
        <div className="head-text">
          <p className="heading">CovidSarthi.in</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
