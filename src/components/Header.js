import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
     
      <Navbar bg="light" expand="lg" id="nav3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Trending
              </Nav.Link>
              <NavDropdown title="Our Favorite's " id="basic-nav-dropdown">
                
                <NavDropdown.Item>
                  <NavLink to={`/searchlist/${"5lz7T66ncrF7sfRCls5zvO"}`}>
                    Nick's Favorite
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to={`/searchlist/${"4XPl3uEEL9hvqMkoZrzbx5"}`}>
                    Lance's Favorite
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <NavLink to={`/searchlist/${"4aPg5umkfE1LA9Xn8rsbBW"}`}>
                    Andrew's Favorite
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" id="bar2">
            Roe Jogan Poddr
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  );
}

export default Header;
