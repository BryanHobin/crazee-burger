import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { theme } from "../theme";

export default function LoginForm() {
  //state
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  //compo
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
        <input
          type="text"
          value={prenom}
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accéder à mon espace</button>
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  background: green;
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


`;
