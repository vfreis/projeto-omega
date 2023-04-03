import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"; 


import Form from 'react-bootstrap/Form';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário e agendar a consulta
  };

  const lugaresPorRegiao = {
    "Zona Norte": ["Unidade Jaçanã", " Unidade Mandaqui", "Unidade Tremembé"],
    "Zona Leste": ["Unidade Aricanduva", "Unidade Mooca" , "Unidade Belenzinho"],
    "Zona Oeste": ["Unidade Barra Funda", "Unidade Alto de Pinheiros", "Unidade Lapa"],
    "Zona Sul": ["Unidade Ipiranga", "Unidade Moema" , "Unidade Jabaquara"],
  };

  // Verifica se o usuário está autenticado e redireciona para a página de login caso não esteja
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container">
  <h1 className="text-center mb-4">Agendamento de Consulta Médica</h1>
  <div className="row">
    <div className="col-md-6 mb-3">
      <Form.Select aria-label="Default select example" onChange={handleEstadoChange}>
        <option>Estado</option>
        <option id="estado" value="Estado">São Paulo</option>
      </Form.Select>
    </div>
    <div className="col-md-6 mb-3">
      <Form.Select aria-label="Default select example" onChange={handleEspecialidadeChange}>
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
      <Form.Select aria-label="Default select example" onChange={handleRegiaoChange}>
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
      <Form.Select aria-label="Default select example" onChange={handleProfissionalChange}>
        <option>Profissional</option>
        <option id="profissional" value="Profissional">Todos os Profissionais</option>
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
    <Button type="submit" text="Agendar Consulta" />
  </div>
</div>

  );
};

export default Agendamento;

