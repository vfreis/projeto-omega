const axios = require('axios')

const testeJson = {
    "nome": "uil2",
    "data_nascimento" : "17071991",
    "sexo" : "sexo",
    "email" : "email",
    "telefone" : "telefone",
    "senha" : "123456789"
}

async function makeRequest(testeJson) {

    const config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/inserircadastro'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest(testeJson);


export default testeJson








// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
// import * as C from "./styles";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Home = () => {
//   const { user, signout } = useAuth(); // obtém informações do usuário autenticado
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Clinica Omega</Navbar.Brand>
//           <<Nav className="me-auto">
//             {user ? ( // se o usuário estiver autenticado, renderize apenas o link de sair
//               <Nav.Link onClick={() => [signout(), navigate("/")]} >
//                 Sair
//               </Nav.Link>
//             ) : ( // se o usuário não estiver autenticado, renderize os links de login e contato
//               <>
//                 <Nav.Link href="#home">Contatos</Nav.Link>
//                 <Nav.Link href="#features">Login</Nav.Link>
//               </>
//             )}
//             <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <C.Container>
//         <C.Title>Home</C.Title>
//       </C.Container>
//     </>
//   );
// };

// export default Home;









// import React from "react";
// import { useNavigate } from "react-router-dom";

// import useAuth from "../../hooks/useAuth";
// import * as C from "./styles";




// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';




// const Home = () => {
//   const { signout,  } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <>

//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Clinica Omega</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Contatos</Nav.Link>
//             <Nav.Link href="#features">Login</Nav.Link>
//             <Nav.Link href="#pricing">Sobre Nós</Nav.Link>
//             <Nav.Link  Text="Sair" onClick={() => [signout(), navigate("/")]}>
//           Sair
//           </Nav.Link>
//           </Nav>
      
//         </Container>
//       </Navbar>





//       <C.Container >
//         <C.Title>Home</C.Title>
        
//       </C.Container>
//     </>
//   );
// };

// export default Home;