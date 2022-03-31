import React from "react";
import { Navbar ,Container ,Nav } from "react-bootstrap";


export const NavbarDefault = () => {
  return (
    <div>
 
<Navbar bg="warning ml-4" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ardi Triyana</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="product">Product</Nav.Link>
        <Nav.Link href="gallery">Gallery</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="contact">Contact Us</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};