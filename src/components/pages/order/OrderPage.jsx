import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function OrderPage() {
 //state
 const { prenom } = useParams()

 //compo

 //render


 return (
  <OrderPageStyled>
   <div className="container">
    <h1>Bonjour {prenom}</h1>
    <Link to="/">
     <button>Déconnexion</button>
    </Link>
   </div>
  </OrderPageStyled>
 )
}

const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
   background-color: red;
   height: 95vh;
   width: 100%;
   max-width: 1400px;
  }
`;