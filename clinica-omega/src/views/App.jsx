import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/principal">
          <Principal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Cadastro() {
  const [nome, setNome] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Salvar informações do usuário e redirecionar para a página principal
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      </label>

      <label>
        Data de Nascimento:
        <input type="date" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} />
      </label>

      <label>
        Sexo:
        <select value={sexo} onChange={(event) => setSexo(event.target.value)}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
      </label>

      <label>
        E-mail:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>

      <label>
        Telefone:
        <input type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
      </label>

      <label>
        Senha:
        <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

function Login() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Validar informações do usuário e redirecionar para a página principal
  }

  return (
