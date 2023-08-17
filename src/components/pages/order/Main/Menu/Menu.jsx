import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/product";
import { findInArray } from "../../../../../utils/array";


export default function Menu() {
  const {
    menu,
    isAdminMode,
    handleDelete,
    resetMenu,
    setIsCollapsed,
    setCurrentTab,
    productSelected,
    setProductSelected,
    titleEditRef,
    handleAddToBasket,
    handleDeleteBasketCard
  } = useContext(OrderContext)


  const handleClick = async (idProductSelected) => {
    if (!isAdminMode) return

    await setIsCollapsed(false)
    await setCurrentTab("edit")
    const productClickedOn = findInArray(idProductSelected, menu)
    await setProductSelected(productClickedOn)

    titleEditRef.current.focus()
  }

  const checkIfProductSelected = (idProductMenu, idProductClickedOn) => {
    return idProductMenu === idProductClickedOn ? true : false;
  }


  const handleCardDelete = (event, idOfProductToDelete) => {
    const forceRemove = true;
    event.stopPropagation(idOfProductToDelete)
    handleDelete(idOfProductToDelete)
    handleDeleteBasketCard(idOfProductToDelete, forceRemove)
    productSelected.id === idOfProductToDelete && setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    const productToAdd = findInArray(idProductToAdd, menu)
    handleAddToBasket(productToAdd)
  }

  if (menu.length === 0) return (
    <div>
      {isAdminMode ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />}
    </div>)
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return <Card
          key={id}
          title={title}
          leftDescription={formatPrice(price)}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          hasDeleteButton={isAdminMode}
          onDelete={(event) => handleCardDelete(event, id)}
          onClick={() => handleClick(id)}
          isHoverable={isAdminMode}
          isSelected={checkIfProductSelected(id, productSelected.id)}
          onAdd={(event) => handleAddButton(event, id)}
        />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
  
  
`;