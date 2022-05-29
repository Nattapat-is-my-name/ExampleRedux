import React, { useState } from "react";
import './Nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
const Example = () => {
  

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >reactstrap</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="navv" navbar>
            <NavItem>
              <Link to="/" style={{textDecoration:"none" , color: "black" , padding : "10px"}} > Home </Link>
            </NavItem>
            <NavItem>
              <Link to="/Item" style={{textDecoration:"none" , color: "black"}} > Item </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
