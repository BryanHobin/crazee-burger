import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function BasketFooter() {
  return (
    <Header className={"footer"}>
      <FooterStyled>
        <span>
          Codé avec ❤️ et React.JS
        </span>
      </FooterStyled>
    </Header>

  )
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;