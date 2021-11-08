import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstText from "./FirstText";
import SecondText from "./SecondText";

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          style={{ fontFamily: '"Lato", sans-serif' }}
        >
          <Container>
            <Navbar.Brand style={{ marginLeft: "-270px" }}>
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
              <Nav.Link as={Link} to="/First">
                First
              </Nav.Link>
              <Nav.Link as={Link} to="/Second">
                Second
              </Nav.Link>
              <Nav.Link as={Link} to="/Third">
                Third
              </Nav.Link>
              <Nav.Link as={Link} to="/Fourth">
                Fourth
              </Nav.Link>
              <Nav.Link as={Link} to="/Fivth">
                Fivth
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
};

export default Header;
