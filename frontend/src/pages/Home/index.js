import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import styles from "../../components/Frase.module.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import dentista from "../../images/dentista.jpeg";
import dent from "../../images/dent.jpg"
import cliente from "../../images/cliente.jpg"
import odontotop from "../../images/odontotop.png"




const Home = () => {
  const { user, signout } = useAuth(); // obtém informações do usuário autenticado
  const navigate = useNavigate();

  return (
    <>
      <Navbar className={styles.navbar} bg="primary" variant="dark" fixed="top">
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
        <Carousel slide={false} interval={null} variant="dark"  >
          <Carousel.Item>
            <img className={styles.imgCarousel} 
              src={odontotop}
              alt="First slide"
              

            />
            <Carousel.Caption>
              <h3>Clinica Omega</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={odontotop}
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
              src={odontotop}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </Container>

    </>
  );
};

export default Home;