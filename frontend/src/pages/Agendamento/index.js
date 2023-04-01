import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Agendamento = () => {
  const [estado, setEstado] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [regiao, setRegiao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [profissional, setProfissional] = useState("");
  const [data, setData] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleEspecialidadeChange = (event) => {
    setEspecialidade(event.target.value);
  };

  const handleRegiaoChange = (event) => {
    setRegiao(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário e agendar a consulta
  };

  // Verifica se o usuário está autenticado e redireciona para a página de login caso não esteja
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h1>Agendamento de Consulta Médica</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Estado"
          value={estado}
          onChange={handleEstadoChange}
        />
        <Input
          type="text"
          placeholder="Especialidade"
          value={especialidade}
          onChange={handleEspecialidadeChange}
        />
        <Input
          type="text"
          placeholder="Região"
          value={regiao}
          onChange={handleRegiaoChange}
        />
        <Input
          type="text"
          placeholder="Unidade"
          value={unidade}
          onChange={handleUnidadeChange}
        />
        <Input
          type="text"
          placeholder="Profissional"
          value={profissional}
          onChange={handleProfissionalChange}
        />
        <Input
          type="date"
          placeholder="Data"
          value={data}
          onChange={handleDataChange}
        />
        <Button type="submit" text="Agendar Consulta" />
      </form>
    </div>
  );
};

export default Agendamento;

