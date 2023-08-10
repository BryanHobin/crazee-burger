import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

const DEFAULT_MENU = fakeMenu.LARGE

export default function OrderPage() {
  //state
  const [isAdminMode, setIsAdminMode] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [currentTab, setCurrentTab] = useState("edit");
  const [menu, setMenu] = useState(DEFAULT_MENU)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)


  //compo

  const handleAddProduct = (nouveauProduit) => {
    const menuCopy = deepClone(menu)

    const menuUpdated = [nouveauProduit, ...menuCopy]

    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = deepClone(menu)

    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

    setMenu(menuUpdated);
  }

  const handleEdit = (productEdited) => {
    const menuCopy = deepClone(menu)
    const indexOfProductEdited = menu.findIndex((product) => product.id === productEdited.id)

    menuCopy[indexOfProductEdited] = productEdited;

    setMenu(menuCopy);
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
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
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