import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { HiCursorClick } from "react-icons/hi"

export default function HintMessage() {
 return (
  <HintMessageStyled><span className='hint'>Cliquer sur un produit du menu pour le modifier </span><HiCursorClick /></HintMessageStyled>
 )
}

const HintMessageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  display: flex;
  align-items:center;
  height: 100%;
  .hint{
   margin-right: ${theme.gridUnit}px;
  }
`;