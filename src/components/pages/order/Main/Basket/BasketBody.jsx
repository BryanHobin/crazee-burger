import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function BasketBody() {
 //state

 //comportements

 //affichage
 return <BasketBodyStyled>
  <span className='empty-message'>Votre commande est vide.</span>
 </BasketBodyStyled>
}

const BasketBodyStyled = styled.div`
 flex: 1;
 box-shadow: ${theme.shadows.basket};
 .empty-message{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.size.P4};
 }
`