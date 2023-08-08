import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

const DEFAULT_MENU = fakeMenu.SMALL

export default function OrderPage() {
  //state
  const [isAdminMode, setIsAdminMode] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [currentTab, setCurrentTab] = useState("add");
  const [menu, setMenu] = useState(DEFAULT_MENU)


  //compo

  const handleAddProduct = (nouveauProduit) => {
    const menuCopy = [...menu]

    const menuUpdated = [nouveauProduit, ...menuCopy]

    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu]

    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

    setMenu(menuUpdated);
  }

  const resetMenu = () => {
    setMenu(DEFAULT_MENU);
  }

  const orderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTab,
    setCurrentTab,
    handleAddProduct,
    menu,
    setMenu,
    handleDelete,
    resetMenu
  }

  //render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
   height: 95vh;
   width: 100%;
   max-width: 1400px;
   display: flex;
   flex-direction: column;
   border-radius: ${theme.borderRadius.extraRound};
  }
`;