import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ fontFamily: '"Lato", sans-serif' }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "-270px" }}>
            APIproject
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              display: "grid",
              textAlign: "center",
              gridTemplateColumns: "100px 100px 100px 100px 100px",
            }}
          >
            <Nav.Link as={NavLink} to="/">
              First
            </Nav.Link>
            <Nav.Link>Second</Nav.Link>
            <Nav.Link>Third</Nav.Link>
            <Nav.Link>Fourth</Nav.Link>
            <Nav.Link>Fivth</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
