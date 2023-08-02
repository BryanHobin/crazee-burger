import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";


export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)


  return (
    <MenuStyled>
      {menu.map(({ title, price, imageSource }) => {
        return <Card key={title} title={title} leftDescription={formatPrice(price)} imageSource={imageSource} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  
  
`;