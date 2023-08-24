import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function Loader() {
 //state

 //comportements

 //affichage
 return <LoaderStyled><span>Chargement en cours...</span></LoaderStyled>
}

const LoaderStyled = styled.div`
font-family: "Amatic SC", cursive;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 2px;
font-size: ${theme.fonts.size.P4};
color: ${theme.colors.greyBlue};

`