import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button className="btnHome" type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;
