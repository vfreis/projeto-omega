import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../components/Frase.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../Footer"
import "./styles.css"

const Home = () => {
  const { user, signout } = useAuth(); // obtain information about the authenticated user
  const navigate = useNavigate(); // obtain the navigation function from react-router-dom

  return (
    <>
      {/* Render the navigation bar */}
      <Navbar
        sticky="top"
        className={styles.navbar}
        bg="primary"
        variant="light"
      >
        <Container fluid className="cnt">
          <Navbar.Brand href="home">Clinica OdontoTop</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? ( // if the user is authenticated, render only the links for Scheduling and Sign out
              <>
                <Nav.Link onClick={() => navigate("/Agendamento")}>
                  Agendamento
                </Nav.Link>
                <Nav.Link href="#">Sobre Nós</Nav.Link>
                <Nav.Link href="/Contatos">Contatos</Nav.Link>
                <Nav.Link onClick={() => [signout(), navigate("/")]}>
                  Sair
                </Nav.Link>
              </>
            ) : (
              // if the user is not authenticated, render only the links for Login and Sign up
              <>
                <Nav.Link href="/contatos">Contatos</Nav.Link>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Cadastre-se</Nav.Link>
                <Nav.Link href="#">Sobre Nós</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Edher  Masetto</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Daniel Torres</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Gabriela de Sá</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Vinicios Falqueiro</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>William Rodrigues</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
        <Footer />

    </>
  );
};

export default Home;
