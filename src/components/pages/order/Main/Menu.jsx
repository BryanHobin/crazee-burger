import { useContext, useState } from "react";
import { styled } from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu } = useContext(OrderContext)

  return (
    <MenuStyled>
      {menu.map(({ title, price, imageSource }) => {
        return <Card key={title} title={title} leftDescription={formatPrice(price)} imageSource={imageSource ? imageSource : DEFAULT_IMAGE} />
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