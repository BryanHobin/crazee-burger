import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function Basket() {
  const { basket } = useContext(OrderContext)

  return (
    <BasketStyled >
      <Total amountToPay={formatPrice()} />
      {basket ? <BasketProducts basket={basket} /> : <BasketEmpty />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};

  .head{
    position: sticky;
    top:0;
  }
  .footer{
    position: sticky;
    bottom:0;
  }
`;