import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function BasketEmpty() {
 //state

 //comportements

 //affichage
 return <BasketEmptyStyled>Votre commande est vide.</BasketEmptyStyled>
}

const BasketEmptyStyled = styled.span`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 flex: 1;
 font-family: "Amatic SC", cursive;
 color: ${theme.colors.greyBlue};
 font-size: ${theme.fonts.size.P4};

`