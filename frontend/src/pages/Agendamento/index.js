import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./modules.css";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { schedule } from "../../services/api";

const Agendamento = () => {
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [regiao, setRegiao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [profissional, setProfissional] = useState("");
  const [data, setData] = useState("");

  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleEspecialidadeChange = (event) => {
    setEspecialidade(event.target.value);
  };

  const handleRegiaoChange = (event) => {
    const regiaoSelecionada = event.target.value;
    setRegiao(regiaoSelecionada);
    setUnidade(""); // limpa a unidade selecionada quando a região é alterada
  };

  const handleUnidadeChange = (event) => {
    setUnidade(event.target.value);
  };

  const handleProfissionalChange = (event) => {
    setProfissional(event.target.value);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      estado,
      especialidade,
      regiao,
      unidade,
      profissional,
      data,
      hora: "00:00:00",
    };

    const res = await schedule(values);

    if (res.data === "calendar created") {
      alert("Agendamento cadastrado com sucesso.");
      navigate("/home");
    } else {
      alert("Não foi possível agendar, tente novamente.");
    }
  };

  const lugaresPorRegiao = {
    "Zona Norte": [
      " Avenida Alfredo Barbosa N° 3002 - Jaçanã",
      " Avenida Adolfo Coelho N°2341 - Mandaqui ",
      " Vila Jardim Yara N°103 -Tremembé",
    ],
    "Zona Leste": [
      "Rua Aricanduva N° 301 - Aricanduva",
      "Rua da Mooca N°2015 - Mooca",
      "Rua Belenzinho N°12 - Belenzinho",
    ],
    "Zona Oeste": [
      "Rua da Várzea N°02 - Barra Funda",
      "Rua Joaquim dos Santos N°100 - Alto de Pinheiros",
      "Vila Bento Bicudo N°10 - Lapa",
    ],
    "Zona Sul": [
      "Rua Ipiranga N°33 - Ipiranga",
      "Rua Indianópolis N°1245 - Moema",
      "Vila Paraguai N°200 - Jabaquara",
    ],
  };

  // Verifica se o usuário está autenticado e redireciona para a página de login caso não esteja
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>Clinica OdontoTop</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/agendamento")}>
                  Agendamento
                </Nav.Link>
                <Nav.Link onClick={() => [signout(), navigate("/")]}>
                  Sair
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cadastro">Cadastro</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div className="home">
        <h1 className="text-center mb-4">Agendamento de Consulta Médica</h1>
        <div className="row">
          <div className="col-md-6 mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={handleEstadoChange}
            >
              <option>Estado</option>
              <option id="estado" value="Estado">
                São Paulo
              </option>
            </Form.Select>
          </div>
          <div className="col-md-6 mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={handleEspecialidadeChange}
            >
              <option>Especialidade</option>
              <option value="1">Ortodontia</option>
              <option value="2">Endodontia</option>
              <option value="3">Periodontia</option>
              <option value="4">Implatodontia</option>
              <option value="5">Odontologia estética</option>
              <option value="6">Odontologia preventiva</option>
            </Form.Select>
          </div>
          <div className="col-md-6 mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={handleRegiaoChange}
            >
              <option>Região</option>
              <option value="Zona Norte">Zona Norte</option>
              <option value="Zona Leste">Zona Leste</option>
              <option value="Zona Oeste">Zona Oeste</option>
              <option value="Zona Sul">Zona Sul</option>
            </Form.Select>
          </div>
          <div className="col-md-6 mb-3">
            {regiao && (
              <Form.Select
                aria-label="Default select example"
                onChange={handleUnidadeChange}
                value={unidade}
                id="unidade"
              >
                <option>Unidade</option>
                {lugaresPorRegiao[regiao].map((lugar) => (
                  <option key={lugar} value={lugar}>
                    {lugar}
                  </option>
                ))}
              </Form.Select>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={handleProfissionalChange}
            >
              <option>Profissional</option>
              <option id="profissional" value="Profissional">
                Todos os Profissionais
              </option>
            </Form.Select>
          </div>
          <div className="col-md-6 mb-3">
            <Input
              type="date"
              placeholder="Data"
              value={data}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            text="Agendar Consulta"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Agendamento;
