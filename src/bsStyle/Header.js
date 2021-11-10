import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { First } from 'react-bootstrap/esm/PageItem';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import WelcomePage from '../components/Pages/WelcomePage';
import ContentPage1 from '../components/Pages/ContentPage1';
import ContentPage2 from '../components/Pages/ContentPage2';
import ContentPage3 from '../components/Pages/ContentPage3';
import ContentPage4 from '../components/Pages/ContentPage4';
import ContentPage5 from '../components/Pages/ContentPage5';

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
            <Navbar.Brand style={{ marginLeft: '-270px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                APIproject
              </Link>
            </Navbar.Brand>
            <Nav
              className="me-auto"
              style={{
                display: 'grid',
                textAlign: 'center',
                gridTemplateColumns: '100px 100px 100px 100px 100px',
              }}
            >
              <Nav.Link as={Link} to="/first">
                First
              </Nav.Link>
              <Nav.Link as={Link} to="/second">
                Second
              </Nav.Link>
              <Nav.Link as={Link} to="/third">
                Third
              </Nav.Link>
              <Nav.Link as={Link} to="/fourth">
                Fourth
              </Nav.Link>
              <Nav.Link as={Link} to="/fivth">
                Fivth
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div
        style={{
          position: 'absolute',
          marginLeft: '180px',
          marginTop: '15px',
          color: 'white',
        }}
      >
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/first" element={<ContentPage1 />} />
          <Route path="/second" element={<ContentPage2 />} />
          <Route path="/third" element={<ContentPage3 />} />
          <Route path="/fourth" element={<ContentPage4 />} />
          <Route path="/fivth" element={<ContentPage5 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
