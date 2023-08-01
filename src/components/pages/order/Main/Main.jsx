import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <Menu />
    </MainStyled>
  )
}


const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex:1;

  box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 0% 1fr;

  overflow-y: scroll;

`;