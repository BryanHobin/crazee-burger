import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket/Basket";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Main() {
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext)



  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode &&
          <TransitionGroup>
            <CSSTransition in={isAdminMode} classNames="admin" appear timeout={300}>
              <Admin />
            </CSSTransition>
          </TransitionGroup>
        }
      </div>
    </MainStyled>
  )
}


const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  box-shadow: ${theme.shadows.strong};


  display: grid;
  grid-template-columns: 25% 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;


  .menu-and-admin{
    position: relative;
    overflow-y: hidden;
    display: grid;
  }

  .admin-enter,.admin-appear{
    opacity: 0;
    transform: translateY(110%);
  }
  .admin-enter-active,.admin-appear-active{
    opacity: 1;
    transform: translateY(0%);
    transition: all ease-in-out .3s;
  }

  
`;