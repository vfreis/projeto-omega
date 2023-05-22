import { Fragment, useRoutes } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Agendamento from "../pages/Agendamento";
import Contatos from "../pages/Contatos"
import SobreNos from "../pages/SobreNos"
import Update from "../pages/Update"

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/agendamento" element={<Agendamento />} />
          <Route exact path="/contatos" element={<Contatos />} />
          <Route exact path="/sobrenos" element={<SobreNos />} /> 
          <Route exact path="/update" element={<Update />} />        
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
