import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">EQUIS Apparel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/apparels/" style={{ color: "black " }}>
                  Men Apparel
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="iconic">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <i className="fa fa-heart-o"></i>
            <Link to="/users/" style={{ color: "white " }}>
              <i className="fa fa-male"></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
