import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { theme } from "../../../theme";

export default function OrderPage() {
  //state
  const { prenom } = useParams()

  //compo

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={prenom} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
   height: 95vh;
   width: 100%;
   max-width: 1400px;
   display: flex;
   flex-direction: column;
   border-radius: ${theme.borderRadius.extraRound};
  }
`;