import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function AdminPanel() {
 return (
  <AdminPanelStyled>AdminPanel</AdminPanelStyled>
 )
}

const AdminPanelStyled = styled.div`
  border: 1px solid red;
  background-color: ${theme.colors.white};
  height: 250px;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
