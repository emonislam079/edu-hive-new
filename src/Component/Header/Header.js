import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={HashLink} to="/home">
      <img
        src="https://www.pinclipart.com/picdir/middle/37-370807_education-clipart-educational-background-transparent-background-education-logo.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Brand as={HashLink} to="/home">EDU Hive</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <NavDropdown title="Pages" id="collasible-nav-dropdown">
        <NavDropdown.Item as={HashLink} to="/about">About Us</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/gallery">Gallery</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/contact">Contact Us</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/faq">Faq</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/about">Something</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/about">Something</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={HashLink} to="/courses">Courses</Nav.Link>
      <Nav.Link as={HashLink} to="/instructor">Instructor</Nav.Link>
      <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={HashLink} to="/events">Events</Nav.Link>
   </Nav>
   <Nav.Link as={HashLink} to="/login">Log In</Nav.Link>
   <Nav.Link as={HashLink} to="/registration">Registration</Nav.Link>
   <Nav.Link as={HashLink} to="/apply">Apply</Nav.Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;