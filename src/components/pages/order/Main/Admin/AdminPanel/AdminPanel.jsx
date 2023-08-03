import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getTabsConfig } from '../tabsConfig';

export default function AdminPanel() {
  const { currentTab } = useContext(OrderContext)

  const tabs = getTabsConfig()
  const tabSelected = tabs.find((tab) => tab.index === currentTab)

  return (
    <AdminPanelStyled>
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.white};
  height: 250px;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px;
`;
