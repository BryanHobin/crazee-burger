import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import BasketBody from "./BasketBody/BasketBody.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Loader from "../Menu/Loader";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketFooter from "./BasketFooter";

export default function Basket() {

  const { basket, menu } = useContext(OrderContext)

  if (menu === undefined) return <Loader />

  return (
    <BasketStyled >
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
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


