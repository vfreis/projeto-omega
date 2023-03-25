import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(){

<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Clinica Alhpa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#todo">H</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
             <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
}


export default Menu 