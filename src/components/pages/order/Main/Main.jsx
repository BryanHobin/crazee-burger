import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext)



  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode && <Admin />}
      </div>
    </MainStyled>
  )
}


const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  box-shadow: ${theme.shadows.strong};


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
  }
  
`;