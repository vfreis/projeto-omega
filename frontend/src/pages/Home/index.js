import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


import styles from "../../components/Frase.module.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import odonto1 from "../../images/odonto1.png"
import odontoTop3 from "../../images/odontoTop3.png"




const Home = () => {
  const { user, signout } = useAuth(); // obtém informações do usuário autenticado
  const navigate = useNavigate();

  return (
    <>
      <Navbar className={styles.navbar} bg="primary" variant="dark" fixed="top">
        <Container fluid>
          
          
         <Navbar.Brand>Clinica OdontoTop</Navbar.Brand> 
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
        <Carousel slide={false} interval={null}   >
          <Carousel.Item>
            <img className="imgTop" 
              src={odontoTop3}
              alt="First slide"
              

            />
            <Carousel.Caption>
              <h2>Clinica OdontoTop</h2>
              <h5>Trate sua saúde bucal com a OdontoTop: tecnologia e eficácia em tratamentos para um sorriso confiante e saudável.</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgTop"
              src={odonto1}
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
              src={odonto1}
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