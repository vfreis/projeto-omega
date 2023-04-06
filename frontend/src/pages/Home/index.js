import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import {  CustomCarousel } from './styles';



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import teste from "../../images/teste.jpg";
import dent from "../../images/dent.jpg"
import cliente from "../../images/cliente.jpg"

const Home = () => {
  const { user, signout } = useAuth(); // obtém informações do usuário autenticado
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand>Clinica Omega</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? ( // se o usuário estiver autenticado, renderize apenas os links de Agendamento e Sair
              <>
                
                <Nav.Link onClick={() => navigate("/Agendamento")}>Agendamento</Nav.Link>
                <Nav.Link href="#">Sobre Nós</Nav.Link>
                <Nav.Link href="#">Contatos</Nav.Link>
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

      <Container fluid >
        <CustomCarousel variant="" >
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={teste}
              alt="First slide"
              style={{ maxwidth:"50px", maxheight: "10px"}}

            />
            <Carousel.Caption>
              <h3>Clinica Omega</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dent}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cliente}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </CustomCarousel>


      </Container>

    </>
  );
};

export default Home;