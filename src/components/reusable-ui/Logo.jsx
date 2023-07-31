import { styled } from "styled-components";
import { theme } from "../pages/theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="Crazee borger logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  color: white;
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1{
    display: inline;
    text-align: center;
    font-family: "Amatic SC", cursive;
    letter-spacing: 1.5px;
    line-height: 1em;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }

  img{
    height: 60px;
    width: 80px;
    object-fit: contain;
    object-position: center;
    margin: 0 5px;
  }
`;
