import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.css';


const Signup = () => {
const [nome, setNome] = useState('');
const [dataNascimento, setDataNascimento] = useState('');
const [sexo, setSexo] = useState('');
const [email, setEmail] = useState("");
const [telefone, setTelefone] = useState('');
const [senha, setSenha] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!nome | !dataNascimento | !sexo |  !email| !telefone | !senha) {
      setError("Preencha todos os campos");
      return;

    }

    const res = signup(nome, dataNascimento, sexo, email, telefone, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>

      <Input
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value)]}
        />
         <Input
          type="date"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={(e) => [setDataNascimento(e.target.value), setError("")]}
        />
         <Input
          type="text"
          placeholder="Digite seu sexo"
          value={sexo}
          onChange={(e) => [setSexo(e.target.value), setError("")]}
        />
        
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          required
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="int"
          placeholder="(11)999999999"
          value={telefone}
          onChange={(e) => [setTelefone(e.target.value), setError("")]}
        />
        {/* <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          required
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        /> */}
        <Input
          type="password"
          placeholder="Digite sua Senha"
          required
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
