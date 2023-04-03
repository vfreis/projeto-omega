import React from "react";
import * as C from "./styles";

const Button = ({ text, onClick, Type = "button", bgColor }) => {
  return (
    <C.Button type={Type} onClick={onClick} bgColor={bgColor}>
      {text}
    </C.Button>
  );
};

export default Button;
