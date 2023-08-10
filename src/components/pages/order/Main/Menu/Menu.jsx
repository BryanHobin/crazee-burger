import { useContext } from "react";
import { styled } from "styled-components";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isAdminMode, handleDelete, resetMenu, setProductSelected } = useContext(OrderContext)



  if (menu.length === 0) return <div>
    {isAdminMode ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />}
  </div>

  const handleClick = (idProductSelected) => {
    const productSelected = menu.find((product) => product.id === idProductSelected)
    setProductSelected(productSelected)
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, price, imageSource }) => {
        return <Card
          key={title}
          title={title}
          leftDescription={formatPrice(price)}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          hasDeleteButton={isAdminMode}
          onDelete={() => handleDelete(id)}
          onEdit={() => handleClick(id)}
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