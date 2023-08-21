import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUser, createUser, getUser } from "../../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  //compo
  const handleChange = (e) => {
    setUsername(e.target.value);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    authenticateUser(username)
    setUsername("");
    navigate(`order/${username}`);
  };
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <Welcome />
        <TextInput
          className="input-login"
          value={username}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom"}
          required
        />
        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward className="icon" />} />

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


 
  .input-login{
    margin: 18px 0;
  }
  

`;
