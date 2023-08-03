import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  //compo
  const handleChange = (e) => {
    setUsername(e.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    navigate(`order/${username}`);
  };
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput value={username} onChange={handleChange} Icon={<BsPersonCircle className="icon" />} placeholder={"Entrez votre prénom"} required />
        <PrimaryButton label={"Accéder à mon espace"} Icon={<IoChevronForward className="icon" />} />

      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  font-family: "Amatic SC", cursive;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding:2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};


  hr{
    border:1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2{
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
  
  .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${theme.fonts.size.SM};
      margin-left: 10px;
    }

`;
