import { styled } from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.medium};


  .head{
    background-color: ${theme.colors.background_dark};
    height: 70px;
  }
  .body{
    flex: 1;
    box-shadow: ${theme.shadows.basket};

  }
  .footer{
    background-color: green;
    height: 70px;
    background-color: ${theme.colors.background_dark};


  }
  
`;