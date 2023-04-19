import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Agendamento from "../pages/Agendamento";


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
         
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
