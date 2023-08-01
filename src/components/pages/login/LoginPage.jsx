import { useState } from "react";
import LoginForm from "./LoginForm";
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {

 //state

 //compo

 //render
 return (
  <LoginPageStyled>
   <Logo />
   <LoginForm />
  </LoginPageStyled>)
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before{
   content: "";
   background:url("/images/burger-background.jpg") rgba(0,0,0,0.7);
   background-size: cover;
   background-position: center center;
   background-blend-mode: darken;

   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: -1;
  }
`;