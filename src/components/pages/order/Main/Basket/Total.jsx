import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Total({ amountToPay }) {
 return (
  <Header>
   <TotalStyled>
    <span className="total">Total</span>
    <span>{amountToPay}</span>
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