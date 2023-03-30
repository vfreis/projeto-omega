import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  const { user, signout } = useAuth(); // obtém informações do usuário autenticado
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="home">Clinica Omega</Navbar.Brand>
          <Nav className="ms-auto">
            {user && ( // se o usuário estiver autenticado, renderize os links de contato e sobre nós
              <>
                <Nav.Link href="#home">Contatos</Nav.Link>
                <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
              </>
            )}
            <Nav.Link onClick={() => [signout(), navigate("/")]} >
              Sair
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <C.Container>
        <C.Title>Home</C.Title>
      </C.Container>
    </>
  );
};

export default Home;
