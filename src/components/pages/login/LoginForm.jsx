import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { theme } from "../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            type="text"
            value={prenom}
            onChange={(e) => {
              setPrenom(e.target.value);
            }}
            placeholder="Entrez votre prénom"
            required
          />
        </div>
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

  .input-with-icon{
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
     

    .icon{
      color:yellow;
      font-size: 15px;
      margin-right: 8px;
      color:  ${theme.colors.greyMedium};

    }

    input{
      border: none;
      font-size: 15px;
      color: ${theme.colors.greyDark};
      width: 100%;
    }

    &::placeholder{
      background-color: #fff;
      color: lightgray;
    }

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
