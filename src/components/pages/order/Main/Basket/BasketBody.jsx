import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import BasketEmpty from './BasketEmpty';
import BasketProducts from './BasketProducts';

export default function BasketBody({ basket }) {
 //state

 //comportements

 //affichage
 return <BasketBodyStyled>
  {basket ? <BasketProducts basket={basket} /> : <BasketEmpty />}
 </BasketBodyStyled>
}

const BasketBodyStyled = styled.div`
 flex: 1;
 box-shadow: ${theme.shadows.basket};
 
`