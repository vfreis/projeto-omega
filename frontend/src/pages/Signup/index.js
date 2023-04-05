import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "bootstrap/dist/css/bootstrap.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!nome | !dataNascimento | !sexo | !email | !telefone | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await signup(
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

    alert("Usuário cadatrado com sucesso!");
    navigate("/");

  };

  return (
    <>
      <form>


        <Navbar bg="primary" variant="dark">
          <Container fluid>
            <Navbar.Brand href="home">Clinica Omega</Navbar.Brand>
            <Nav className="ms-auto">

              <Nav.Link href="#home">Contatos</Nav.Link>
              <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        <C.Container>
          <C.Label>SISTEMA DE LOGIN</C.Label>
          <C.Content>
            <Input
              type="text"
              placeholder="Digite seu Nome"
              name="nome"
              id="nome"
              value={nome}
              onChange={(e) => [setNome(e.target.value)]}
            />
            <Input
              type="date"
              placeholder="Data de Nascimento"
              name="data_nascimento"
              id="data_nascimento"
              value={dataNascimento}
              onChange={(e) => [setDataNascimento(e.target.value), setError("")]}
            />
            <Form.Select aria-label="Default select example" onChange={(e) => [setSexo(e.target.value), setError("")]} >
              <option>Sexo</option>
              <option value="Masculino">Masculino</option>
              <option id="sexo" value="Feminino">Feminino</option>
              <option value="Biron">Sei lá</option>
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