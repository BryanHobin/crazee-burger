import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/product";


export default function Menu() {
  const { menu, isAdminMode, handleDelete, resetMenu, setIsCollapsed, setCurrentTab, productSelected, setProductSelected, titleEditRef, handleAddToBasket } = useContext(OrderContext)


  const handleClick = async (idProductSelected) => {
    if (!isAdminMode) return

    await setIsCollapsed(false)
    await setCurrentTab("edit")
    const productClickedOn = menu.find((product) => product.id === idProductSelected)
    await setProductSelected(productClickedOn)

    titleEditRef.current.focus()
  }

  const checkIfProductSelected = (idProductMenu, idProductClickedOn) => {
    return idProductMenu === idProductClickedOn ? true : false;
  }


  const handleCardDelete = (event, idOfProductToDelete) => {
    event.stopPropagation(idOfProductToDelete)
    handleDelete(idOfProductToDelete)
    productSelected.id === idOfProductToDelete && setProductSelected(EMPTY_PRODUCT)
    titleEditRef.current.focus()

  }

  if (menu.length === 0) return (
    <div>
      {isAdminMode ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />}
    </div>)
  return (
    <MenuStyled>
      {menu.map((product) => {
        return <Card
          key={product.id}
          title={product.title}
          leftDescription={formatPrice(product.price)}
          imageSource={product.imageSource ? product.imageSource : DEFAULT_IMAGE}
          hasDeleteButton={isAdminMode}
          onDelete={(event) => handleCardDelete(event, product.id)}
          onClick={() => handleClick(product.id)}
          isHoverable={isAdminMode}
          isSelected={checkIfProductSelected(product.id, productSelected.id)}
          onAdd={(e) => handleAddToBasket(e, product)}
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