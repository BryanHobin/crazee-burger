import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { theme } from "../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "./TextInput";

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

        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
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

 

  .button-with-icon{
    background-color: ${theme.colors.primary};
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding:18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    border: 1px solid ${theme.colors.primary} ;
    transition: all 200ms ease-in-out;

    &:hover:not(:disabled){
      background-color: #fff;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
    }

    &:active{
      color: white;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
