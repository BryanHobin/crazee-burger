import { styled } from "styled-components";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findInArray } from "../../../utils/array";
import { getUser } from "../../../../api/user";
import { useParams } from "react-router-dom";
import { initialiseSession } from "./helpers/initialiseSession";


export default function OrderPage() {
  //state
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTab, setCurrentTab] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()

  const { menu, setMenu, handleAddProduct, handleDelete, handleEdit, resetMenu, checkIfProductSelected } = useMenu()
  const { basket, setBasket, handleDeleteBasketCard, handleAddToBasket } = useBasket()
  const { username } = useParams()


  //compo
  const handleProductSelected = async (idProductSelected) => {
    const productClickedOn = findInArray(idProductSelected, menu)
    await setIsCollapsed(false)
    await setCurrentTab("edit")
    await setProductSelected(productClickedOn)

    titleEditRef.current.focus()
  }





  const orderContextValue = {
    username,
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTab,
    setCurrentTab,
    handleAddProduct,
    menu,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    handleDeleteBasketCard,
    handleAddToBasket,
    handleProductSelected,
    checkIfProductSelected,
  }

  //API

  getUser("Bryan")

  useEffect(() => {
    initialiseSession(username, setBasket, setMenu)
  }, [])

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