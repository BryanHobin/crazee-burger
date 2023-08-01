import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className }) {
  return (
    <LogoStyled className={className}>
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

  h1{
    display: inline;
    text-align: center;
    font-family: "Amatic SC", cursive;
    letter-spacing: 1.5px;
    line-height: 1em;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }

  img{
    height: 60px;
    width: 80px;
    object-fit: contain;
    object-position: center;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
