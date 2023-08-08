import { useContext } from 'react';
import { styled } from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

export default function EmptyMenuClient() {
 const { resetMenu } = useContext(OrderContext)


 return (
  <EmptyMenuClientStyled>
   <span>Pas de produit</span>
  </EmptyMenuClientStyled>
 )
}

const EmptyMenuClientStyled = styled.div`
  
`;