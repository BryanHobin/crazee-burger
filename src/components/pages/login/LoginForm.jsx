import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { theme } from "../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  //state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();


  //compo
  const handleChange = (e) => {
    setPrenom(e.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setPrenom("");
    navigate(`order/${prenom}`);
  };
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput value={prenom} onChange={handleChange} Icon={<BsPersonCircle className="icon" />} placeholder={"Entrez votre prénom"} required />
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
  padding:2.5rem 2rem;
  border-radius: 5px;


  hr{
    border:1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h1{
    color: white;
    font-size: 48px;
  }

  h2{
    color: ${theme.colors.greyLight};
    margin: 20px 10px 10px;
    font-size: 36px;
  }
  
  .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      margin-left: 10px;
    }

`;
