import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  const { user, signout } = useAuth(); // obtém informações do usuário autenticado
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Clinica Omega</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? ( // se o usuário estiver autenticado, renderize apenas os links de Agendamento e Sair
              <>
                <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/Agendamento")}>Agendamento</Nav.Link>
                <Nav.Link onClick={() => [signout(), navigate("/")]} >Sair</Nav.Link>
              </>
            ) : ( // se o usuário não estiver autenticado, renderize apenas os links de Login e Cadastro
              <>
                <Nav.Link href="#">Contatos</Nav.Link>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Cadastre-se</Nav.Link>
                <Nav.Link href="#">Sobre Nós</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      <C.Container>
        <C.Title>Olá Seja bem-vindo(a).</C.Title>
      </C.Container>
    </>
  );
};

export default Home;