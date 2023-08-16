import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice()} />
      <BasketBody />
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