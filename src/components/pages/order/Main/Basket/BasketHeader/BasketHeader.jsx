import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import Header from "../../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../../utils/maths";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import { calculateTotalToPay } from "./helper";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext)
  const totalToPay = calculateTotalToPay(basket, menu)


  return (
    <Header className={"head"}>
      <BasketHeaderStyled>
        <span>Total</span>
        <CasinoEffect count={formatPrice(totalToPay)} />
      </BasketHeaderStyled>
    </Header>

  )
}

const BasketHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;