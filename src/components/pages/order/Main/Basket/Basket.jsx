import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { calculateTotalToPay, formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import BasketEmpty from "./BasketEmpty";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Loader from "../Menu/Loader";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext)

  const isBasketEmpty = basket.length === 0

  if (menu === undefined) return <Loader />

  return (
    <BasketStyled >
      <Total />
      {isBasketEmpty ? <BasketEmpty /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .head{
    position: sticky;
    top:0;
  }
  .footer{
    position: sticky;
    bottom:0;
  }
`;


