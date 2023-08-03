import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, isAddSelected, setIsAddSelected, isEditSelected, setIsEditSelected, currentTab, setCurrentTab } = useContext(OrderContext)

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTab(tabSelected)
  }

  const tabs = getTabsConfig(currentTab)


  return (
    <AdminTabsStyled>
      <Tab label="" Icon={isCollapsed ? <BsChevronUp /> : <BsChevronDown />} className={isCollapsed ? "is-active" : ""} onClick={() => setIsCollapsed(!isCollapsed)} />
      {tabs.map((tab) => <Tab label={tab.label} Icon={tab.Icon} onClick={() => selectTab(tab.index)} className={tab.className} />)}
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  margin-left: 70px;
  transition: all .2s ease-in-out;
  .is-active{
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button{
  margin-left: 1px;
  }

`;