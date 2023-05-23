import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { format } from "date-fns";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const { signin, user, signout } = useAuth();

  const handleSignup = async () => {
    if (!nome || !dataNascimento || !sexo || !email || !telefone || !senha) {
      setError("Preencha todos os campos");

      return;
    }

  

    const res = await Signup(
      nome,
      dataNascimento,
      sexo,
      email,
      telefone,
      senha
    );

    if (!res.success) {
      setError(res.message);
      return;
    }

    navigate("/");
    alert("Usuário cadastrado com sucesso!");
  };

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
                
                <Nav.Link href="/home" className="navtop">
                  Home
                </Nav.Link>
              </>
            )}
          
          </Nav>
        </Navbar>
      </Container>
      <form>
       

        <C.Container>
          <C.Label>SISTEMA DE CADASTRO </C.Label>
          <C.Content>
            <Input
              
              type="text"
              placeholder="Digite seu Nome"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => [setNome(e.target.value)]}
            />
            {/* <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group> */}

            <Input
              type="date"
              placeholder="Data de Nascimento"
              name="data_nascimento"
              id="data_nascimento"
              value={dataNascimento}
              onChange={(e) => [
                setDataNascimento(e.target.value),
                setError(""),
              ]}
            />
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => [setSexo(e.target.value), setError("")]}
            >
              <option>Sexo</option>
              <option value="Masculino">Masculino</option>
              <option id="sexo" value="Feminino">
                Feminino
              </option>
              {/* <option value="outros">Sei lá</option> */}
            </Form.Select>

            <Input
              type="email"
              placeholder="Digite seu E-mail"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
              type="int"
              placeholder="(11)999999999"
              name="telefone"
              id="telefone"
              value={telefone}
              onChange={(e) => [setTelefone(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              name="senha"
              id="senha"
              required
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.labelError>{error}</C.labelError>
            <Button text="Inscrever-se" onClick={handleSignup} />
            <C.LabelSignin>
              Já tem uma conta?
              <C.Strong>
                <Link to="/signin">&nbsp;Entre</Link>
              </C.Strong>
            </C.LabelSignin>
          </C.Content>
        </C.Container>
      </form>
    </>
  );
};

export default Signup;
