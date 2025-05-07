import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = ({ toggleTheme, theme }) => {
  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme} expand="lg" className="px-3 rounded-3">
      <Navbar.Brand href="/">Jerry Forsberg</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
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