import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Header({ className, children }) {
  return (
    <HeaderStyled className={className}>{children}</HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
  z-index: 2;
`;