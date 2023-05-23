import React from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import especialidades from "../../images/especialidades.png";
import especialidade1 from "../../images/especialidade1.png";
import especialidade2 from "../../images/especialidade2.png";
import especialidade3 from "../../images/especialidade3.png";
import medi from "../../images/medi.jpg";
import Mia from "../../images/Mia.jpg";
import Paulo from "../../images/Paulo.jpg";
import Carol from "../../images/Carol.jpg";
import Gina from "../../images/Gina.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="especialidades-container">
        <div className="about">
          <h2 className="text-center esp">Nossas Especialidade</h2>
          <h6 className="text-center  ">
            Cuidando do seu sorriso com excelência: Na OdontoTop, oferecemos um
            atendimento odontológico personalizado e de qualidade para cuidar do
            seu sorriso com excelência e dedicação.
          </h6>
        </div>

        <div className="especialidades-container">
          <div className="especialidade">
            <img src={especialidade1} alt="Especialidade 1" />
            <h5 className="text-center esp">Clareamento dos Dentes</h5>
            <p className="text-center p">
              Com o clareamento dental da OdontoTop, seu sorriso fica mais
              brilhante e confiante em apenas algumas sessões, sem dor ou
              desconforto
            </p>
          </div>
          <div className="especialidade">
            <img src={especialidades} alt="Especialidade 1" />
            <h5 className="text-center esp ">Odontologia Indolor</h5>
            <p className="text-center p">
              Na OdontoTop, a odontologia é indolor para que seu sorriso seja
              sempre radiante e sem medo.
            </p>
          </div>
          <div className="especialidade">
            <img src={especialidade2} alt="Especialidade 2" />
            <h5 className="text-center esp">Cirurgia Oral</h5>
            <p className="text-center p">
              Com a tecnologia e cuidado da OdontoTop, a cirurgia oral é feita
              de forma segura e confortável para garantir sua saúde bucal e
              bem-estar
            </p>
          </div>
          <div className="especialidade">
            <img src={especialidade3} alt="Especialidade 3" />
            <h5 className="text-center esp">Periodontia</h5>
            <p className="text-center p">
              Na OdontoTop, a periodontia é tratada com atenção e cuidado para
              garantir a saúde das suas gengivas e dentes, prevenindo e tratando
              doenças periodontais
            </p>
          </div>
        </div>
        <div></div>
      </section>
      <Container fluid="true" className="py-5">
        <Row>
          <Col md={6} className="my-auto">
            <h2 className="mb-4 text-center esp">Sobre nós</h2>
            <p className="mb-4 textSobre ">
              A OdontoTop foi fundada em 2005 pelo Dr. João e desde então tem
              sido referência em atendimento odontológico de qualidade na
              região. Nosso objetivo é continuar a crescer e nos aprimorar para
              continuar a oferecer o melhor atendimento para nossos pacientes.
            </p>
            <p className="textSobre">
              A clínica oferece uma ampla gama de serviços odontológicos, desde
              procedimentos básicos até os mais complexos, garantindo sempre os
              melhores resultados e a segurança dos pacientes. Ao longo de sua
              história, a Clínica Odontop já transformou o sorriso de milhares
              de pessoas, contribuindo para sua saúde bucal e qualidade de vida.
            </p>
          </Col>
          <Col md={6}>
            <img fluid="true" className="imgsobreNos" src={medi} alt="Clínica Odontop"  />
          </Col>
        </Row>
      </Container>
      <section className="equipe">
        <div className="divEquipe">
          <h3 className="text-center esp ">Conheça Nossa Equipe de Médicos</h3>
          <p className="text-center">Contamos com uma equipe qualificada e profissional</p>
          <ul className="ulEquipe">
            <li className="liEquipe">
              <img fluid="true" className="cardMedicos" src={Mia} alt="" />
              <h4>Dra. Mia Malkova</h4>
              <p className="pEquipe">Ortodontista</p>
              <p className="pEquipe">CRM: 12345</p>
            </li>
            <li className="liEquipe">
              <img className="cardMedicos" src={Paulo} alt="" />
              <h4>Dr. Paulo Ribeiro</h4>
              <p className="pEquipe">Cirurgião Dentista</p>
              <p className="pEquipe">CRM: 67890</p>
            </li>
            <li className="liEquipe">
              <img fluid="true" className="cardMedicos" src={Gina} alt=""/>
              <h4>Dra. Gina Valentina </h4>
              <p className="pEquipe">Periodontia</p>
              <p className="pEquipe">CRM: 54321</p>
            </li>
            <li className="liEquipe">
            <img className="cardMedicos" src={Carol} alt=""/>
              <h4>Dra. Carol Fernandez</h4>
              <p className="pEquipe">Reabilitação Oral</p>
              <p className="pEquipe">CRM: 54321</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
