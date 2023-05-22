import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SobreNos from "../SobreNos";
import Contatos from "../Contatos";
import Footer from "../Footer";
import Update from "../Update";
import "./index.css";

const Home = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Container fluid className="page-container">
        <Navbar sticky="top" variant="light" className="navtop">
          <Navbar.Brand className="navtop">Clinica OdontoTop</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link onClick={() => navigate("/Agendamento")}>
                  Agendamento
                </Nav.Link>

                <Nav.Link onClick={() => navigate("/Update")}>
                  Editar Dados
                </Nav.Link>
               
                <Nav.Link
                  onClick={() => [signout(), navigate("/")]}
                  className="navtop"
                >
                  Sair
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/signin" className="navtop">
                  Login
                </Nav.Link>
                <Nav.Link href="/signup" className="navtop">
                  Cadastre-se
                </Nav.Link>
              </>
            )}
          
          </Nav>
        </Navbar>
      </Container>
      <SobreNos id="sobre-nos" />
      <Contatos id="contatos" />
      <Footer />
    </>
  );
};

export default Home;
