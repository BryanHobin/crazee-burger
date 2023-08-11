import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isAdminMode, handleDelete, resetMenu, setIsCollapsed, setCurrentTab, productSelected, setProductSelected, titleEditRef } = useContext(OrderContext)


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


  const handleCardDelete = (event, id) => {
    event.stopPropagation(id)
    handleDelete(id)
  }

  if (menu.length === 0) return (
    <div>
      {isAdminMode ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />}
    </div>)
  return (
    <MenuStyled>
      {menu.map(({ id, title, price, imageSource }) => {
        return <Card
          key={title}
          title={title}
          leftDescription={formatPrice(price)}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          hasDeleteButton={isAdminMode}
          onDelete={(event) => handleCardDelete(event, id)}
          onClick={() => handleClick(id)}
          isHoverable={isAdminMode}
          isSelected={checkIfProductSelected(id, productSelected.id)}
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