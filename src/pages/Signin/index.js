import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../components/bolsadeestudo.png";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <div className="logo-container">
            <C.Logo src={logo} alt="logo2" />
          </div>
      <div>
        <C.Label>Controle de Horas - Uniedu</C.Label>
      </div>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        <C.LinkWithImage
          href="https://bolsasuniedu.sed.sc.gov.br/wwpbaseobjects.home.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
        <div className="image-container">
          <C.Image src="./uniedu1.png" alt="uniedu" />
        </div>
        </C.LinkWithImage>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
