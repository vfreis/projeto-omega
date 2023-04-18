import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSigin = async (e) => {
    e.preventDefault();
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return false;
    }

    const res = await signin(email, senha);

    if (!res.success) {
      setError(res.message);
      return false;
    }

    navigate("/home");
  };

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar bg="primary" variant="dark" sticky="top">
          <Container fluid>
            <Navbar.Brand href="home">Clinica OdontoTop</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Contatos</Nav.Link>
              <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
              <Nav.Link href="/signup">Cadastre-se</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <C.Container>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <C.Content onSubmit={(e) => handleSigin(e)}>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button text="Entrar" Type="submit" />

          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
    </>
  );
};

export default Signin;
