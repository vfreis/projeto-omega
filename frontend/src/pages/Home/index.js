import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Home = () => {
  const { signout,  } = useAuth();
  const navigate = useNavigate();

  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Clinica Omega</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Contatos</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
            <Button  Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
          </Button>
          </Nav>
      
        </Container>
      </Navbar>





      <C.Container >
        <C.Title>Home</C.Title>
        
      </C.Container>
    </>
  );
};

export default Home;
