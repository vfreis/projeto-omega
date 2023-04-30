import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import "./index.css"

import william from "../../images/william.jpeg"
import Daniel from "../../images/Daniel.jpg"
import Edher from "../../images/Edher.jpg"
import Gabi from "../../images/Gabi.jpg"
import falq from "../../images/falq.jpg"


const Contatos = () => {
  // const { user, signout } = useAuth(); // obtain information about the authenticated user
  // const navigate = useNavigate(); // obtain the navigation function from react-router-dom

  return (
    <>
      <Container className="contatos">
        
      <h2 className="text-center ">Nosso  Squad</h2>
      
        <Row xs={1} sm={2} md={3} lg={4} className="time">
          <Col>
            <Card>
              <Card.Img variant="top" src={Edher} />
              <Card.Body>
                <Card.Title>Edher  Masetto</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="https://www.linkedin.com/in/edhercarvalho/" target="_blank" >Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Daniel} />
              <Card.Body>
                <Card.Title>Daniel Torres</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="https://www.linkedin.com/in/daniel-torres-b13611207/" target="_blank" >Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Gabi} />
              <Card.Body>
                <Card.Title>Gabriela de Sá</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="https://www.linkedin.com/in/gabrieladesaaa/" target="_blank" >Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={falq} />
              <Card.Body>
                <Card.Title>Vinicios Falqueiro</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="#" target="_blank" >Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={william} />
              <Card.Body>
                <Card.Title>William Rodrigues</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="https://www.linkedin.com/in/william07/" target="_blank">Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Professor Antonio de Oliveira</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="btn-social">
              <Button variant="outline-primary" href="" target="_blank">Linkedin</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contatos;
