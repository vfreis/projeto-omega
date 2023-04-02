import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", bgColor }) => {
  return (
    <C.Button type={Type} onClick={onClick} bgColor={bgColor}>
      {Text}
    </C.Button>
  );
};

export default Button;
