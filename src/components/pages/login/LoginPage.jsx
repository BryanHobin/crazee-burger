import { useState } from "react";
import LoginForm from "./LoginForm";
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {

 //state

 //compo

 //render
 return (<LoginPageStyled>
  <Logo />
  <LoginForm />
 </LoginPageStyled>)
}

const LoginPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;