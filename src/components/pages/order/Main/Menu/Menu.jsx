import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/product";


export default function Menu() {
  const {
    menu,
    isAdminMode,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketCard,
    handleProductSelected,
    checkIfProductSelected
  } = useContext(OrderContext)





  const handleCardDelete = (event, idOfProductToDelete) => {
    const forceRemove = true;
    event.stopPropagation(idOfProductToDelete)
    handleDelete(idOfProductToDelete)
    handleDeleteBasketCard(idOfProductToDelete, forceRemove)
    productSelected.id === idOfProductToDelete && setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    handleAddToBasket(idProductToAdd)
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
          onClick={isAdminMode ? () => handleProductSelected(id) : null}
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