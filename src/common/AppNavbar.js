import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const AppNavbar = ({ toggleTheme, theme }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(prev => !prev)} style={{ height: '100px' }} variant={theme} expand="md" className="app-navbar px-3 rounded-3 shadow-sm mb-4">
      <Navbar.Brand href="/">Jerry Forsberg</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" onClick={() => setExpanded(false)}>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/caseStudies">
            <Nav.Link>Case Studies</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <Button variant={theme === 'light' ? 'outline-dark' : 'outline-light'} onClick={toggleTheme} className="ms-3">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;