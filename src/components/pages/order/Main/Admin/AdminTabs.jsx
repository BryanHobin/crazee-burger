import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { BsFillPencilFill, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, isAddSelected, setIsAddSelected, isEditSelected, setIsEditSelected } = useContext(OrderContext)

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    if (tabSelected === "add") {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }
    if (tabSelected === "edit") {
      setIsAddSelected(false)
      setIsEditSelected(true)
    }
  }

  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <BsChevronUp /> : <BsChevronDown />,
      onClick: () => { setIsCollapsed(!isCollapsed) },
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <BsFillPencilFill />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    }
  ]


  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab label={tab.label} Icon={tab.Icon} onClick={tab.onClick} className={tab.className} />
        )
      })}
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