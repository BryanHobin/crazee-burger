import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function Basket() {
  const { basket } = useContext(OrderContext)

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice()} />
      <BasketBody basket={basket} />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.medium};

`;