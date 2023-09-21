import React from "react";
import * as C from "./styles";
import logo from "C:/Users/User/Documents/Teste-React/login/src/components/bolsadeestudo.png";

const Images = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Images>
      <img src={logo} className="App-logo" alt="logo2" />
    </C.Images>
  );
};

export default Images