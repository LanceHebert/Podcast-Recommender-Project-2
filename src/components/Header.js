import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" id="navHome">
        <Container id="bar2">
          <Navbar.Brand href="/">
            <img
              id="roeJogan"
              alt=""
              src="https://media3.giphy.com/media/ZMfZxtLruYiSaJn9vd/giphy.gif?cid=790b76116f9482263a6112e1d4b966d06fc75fed064efb97&rid=giphy.gif&ct=g"
              className="d-inline-block align-top"
            />{" "}
            <span id="filler" />
            <span className="header">Home </span>
            <span> Favorites </span>
            <span> Trending </span>
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Navbar bg="light" expand="lg" id="nav3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Favorites
              </Nav.Link>
              <NavDropdown title="Trending" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item> */}
                <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  US
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Worldwide
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Multiverse
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

    // <div className="header">
    //   <div id="navHome">
    //     {/* <img alt="navHome" src="https://prod.liveshare.vsengsaas.visualstudio.com/join?4D6E358624428042B5AD44F1AA2341680253"/> */}
    //   </div>
    //   <div>
    //     <iframe
    //       src="https://giphy.com/embed/ZMfZxtLruYiSaJn9vd"
    //       width="100%"
    //       height="100%"
    //       frameBorder="0"
    //       class="giphy-embed"
    //       allowFullScreen
    //     ></iframe>
    //   </div>
    //   <a href="https://giphy.com/gifs/ufc-reaction-joe-rogan-ZMfZxtLruYiSaJn9vd">

    //   </a>

    //   <h1>Roe Jogan Pod Recommender</h1>
    // </div>
  );
}

export default Header;
