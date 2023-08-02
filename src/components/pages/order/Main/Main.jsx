import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  )
}


const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border: 1px solid green;
  height: calc(95vh - 10vh);
  box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;


  display: grid;
  grid-template-columns: 0% 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};


  .menu-and-admin{
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    
    .admin{
      background-color: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
  
`;