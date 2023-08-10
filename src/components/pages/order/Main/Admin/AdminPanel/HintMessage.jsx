import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { HiCursorClick } from "react-icons/hi"

export default function HintMessage() {
 return (
  <HintMessageStyled>Cliquer sur un élément pour le modifier <HiCursorClick /></HintMessageStyled>
 )
}

const HintMessageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
`;