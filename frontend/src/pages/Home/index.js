// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// import styles from "../../components/Frase.module.css"
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Carousel from 'react-bootstrap/Carousel';
// import odonto1 from "../../images/odonto1.png"
// import odontoTop3 from "../../images/odontoTop3.png"
// import "./index.css"
// import Footer from "../Footer"

// const Home = () => {
//   const { user, signout } = useAuth(); // obtém informações do usuário autenticado
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar sticky="top" className={styles.navbar}  bg="primary" variant="light" >
//         <Container fluid className="cnt">

//          <Navbar.Brand>Clinica OdontoTop</Navbar.Brand>
//           <Nav className="ms-auto">
//             {user ? ( // se o usuário estiver autenticado, renderize apenas os links de Agendamento e Sair
//               <>

//                 <Nav.Link onClick={() => navigate("/Agendamento")}>Agendamento</Nav.Link>
//                 <Nav.Link href="#">Sobre Nós</Nav.Link>
//                 <Nav.Link href="/Contatos">Contatos</Nav.Link>
//                 <Nav.Link onClick={() => [signout(), navigate("/")]} >Sair</Nav.Link>

//               </>
//             ) : ( // se o usuário não estiver autenticado, renderize apenas os links de Login e Cadastro
//               <>
//                 <Nav.Link href="/contatos">Contatos</Nav.Link>
//                 <Nav.Link href="/signin">Login</Nav.Link>
//                 <Nav.Link href="/signup">Cadastre-se</Nav.Link>
//                 <Nav.Link href="#">Sobre Nós</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>
//       <Container fluid className="carousel-container">
//         <Carousel  slide={false} interval={3500} variant="dark"  >
//           <Carousel.Item>
//             <img className="imgHome"
//               src={odontoTop3}
//               alt="First slide"

//             />
//             <Carousel.Caption>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="imgHome"
//               src={odonto1}
//               alt="Second slide"
//             />
//             <Carousel.Caption>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="imgHome"
//               src={odonto1}
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Container>

//       <Footer />

//     </>
//   );
// };

// export default Home;

// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import SobreNos from "../SobreNos";
// import Contatos from "../Contatos";
// import Footer from "../Footer";
// import "./index.css";

// const Home = () => {
//   console.log("executando função Home");
//   const { user, signout } = useAuth();
//   const navigate = useNavigate();

//   // const handleScrollToSection = (id) => {
//   //   const section = document.getElementById(id);
//   //   section.scrollIntoView({ behavior: "smooth" });
//   // };

//   return (
//     <>
//       <Container fluid={true.toString()} className="page-container">


//         <Navbar sticky="top" variant="light" className="navtop">
//           <Navbar className="navtop">Clinica OdontoTop</Navbar>
//           <Nav className="ms-auto">
//             {user ? (
//               <>
//                 <Nav.Link onClick={() => navigate("/Agendamento")}>
//                   Agendamento
//                 </Nav.Link>

//                 <Nav.Text>{user.name}</Nav.Text>

//                 <Nav.Link onClick={() => [signout(), navigate("/")]}>
//                   Sair
//                 </Nav.Link>
//               </>
//             ) : (
//               <>
//                 <Nav.Link href="/signin">Login</Nav.Link>
//                 <Nav.Link href="/signup">Cadastre-se</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar>
//       </Container>
//       <SobreNos id="sobre-nos" />
//       <Contatos id="contatos" />
//       <Footer />
//     </>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SobreNos from "../SobreNos";
import Contatos from "../Contatos";
import Footer from "../Footer";
import "./index.css";

const Home = () => {
  console.log("executando função Home");
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Container fluid="true" className="page-container">
        <Navbar sticky="top" variant="light" className="navtop">
          <Navbar.Brand className="navtop">Clinica OdontoTop</Navbar.Brand>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link onClick={() => navigate("/Agendamento")}>
                  Agendamento
                </Nav.Link>

                

                <Nav.Link onClick={() => [signout(), navigate("/")]}>
                  Sair
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Cadastre-se</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar>
      </Container>
      <SobreNos id="sobre-nos" />
      <Contatos id="contatos" />
      <Footer />
    </>
  );
};

export default Home;
