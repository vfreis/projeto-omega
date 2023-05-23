import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.css";

import william from "../../images/william.jpeg";
import Daniel from "../../images/Daniel.jpg";
import Edher from "../../images/Edher.jpg";
import Gabi from "../../images/Gabi.jpg";
import falq from "../../images/falq.jpg";
import Prof from "../../images/Prof.jpg";

const Contatos = () => {
  // const { user, signout } = useAuth(); // obtain information about the authenticated user
  // const navigate = useNavigate(); // obtain the navigation function from react-router-dom

  return (
    <>
        <div className="text-center squad-text">
          <h2 className="textEsquad">Nosso Squad</h2>
          <p className="text-center">Uma equipe multidisciplinar com objetivos específicos, formada para aumentar o desempenho e agilidade de um projeto.</p>
        </div>
      <Container  className="contatos">
        <Row xs={1} sm={2} md={3} lg={4} className="time">
          <Col>
            <Card>
              <Card.Img fluid="true" variant="top" src={Prof} />
              <Card.Body>
                <Card.Title>Antonio de Oliveira</Card.Title>
                <Card.Text>
                  Nosso orientador do projeto, é um profissional experiente e
                  dedicado que tem nos guiado e ajudado a alcançar nossos
                  objetivos.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/antonio-de-oliveira-dias-722401b/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img fluid="true" variant="top" src={Edher} />
              <Card.Body>
                <Card.Title>Edher Masetto</Card.Title>
                <Card.Text>
                  Desenvolvedor Front-end, tecnologias utilizadas no projeto:
                  HTML, CSS JAVA SCRIPT, REACT
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/edhercarvalho/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img fluid="true" variant="top" src={Daniel} />
              <Card.Body>
                <Card.Title>Daniel Torres</Card.Title>
                <Card.Text>
                  Desenvolvedor Back-end tecnologias utilizadas no projeto:
                  PYTHON-FLASK, AWS
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/daniel-torres-b13611207/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img fluid="true" variant="top" src={Gabi} />
              <Card.Body>
                <Card.Title>Gabriela de Sá</Card.Title>
                <Card.Text>
                  Analista de Requisitos, responsável por coletar, analisar e
                  documentar os requisitos do projeto, garantindo que os
                  requisitos estejam claros, completos e bem definidos.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/gabrieladesaaa/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img fluid="true" variant="top" src={falq} />
              <Card.Body>
                <Card.Title>Vinicios Falqueiro</Card.Title>
                <Card.Text>
                  Desenvolvedor Back-end e da segurança, tecnologias utilizadas
                  no projeto PYTHON-FLASK, MYSQL, AWS
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/vfalqueiroreis/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={william} />
              <Card.Body>
                <Card.Title>William Rodrigues</Card.Title>
                <Card.Text>
                  Desenvolvedor Front-end, tecnologias utilizadas no projeto:
                  HTML, CSS JAVA SCRIPT, REACT
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
                <Button
                  variant="outline-primary"
                  href="https://www.linkedin.com/in/william07/"
                  target="_blank"
                >
                  Linkedin
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contatos;
