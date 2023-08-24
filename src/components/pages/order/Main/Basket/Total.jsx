import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { calculateTotalToPay, formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Total() {
  const { basket, menu } = useContext(OrderContext)
  const totalToPay = calculateTotalToPay(basket, menu)


  return (
    <Header className={"head"}>
      <TotalStyled>
        <span>Total</span>
        <CasinoEffect count={formatPrice(totalToPay)} />
      </TotalStyled>
    </Header>

  )
}

const TotalStyled = styled.div`
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