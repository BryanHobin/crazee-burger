import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Basket() {
  return (
    <BasketStyled>
      <Header>Head</Header>
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.medium};


  .body{
    flex: 1;
    box-shadow: ${theme.shadows.basket};

  }

  
`;