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

  return (
    <AdminTabsStyled>
      <Tab Icon={isCollapsed ? <BsChevronUp /> : <BsChevronDown />} onClick={() => { setIsCollapsed(!isCollapsed) }} className={isCollapsed ? "is-active" : ""} />
      <Tab Icon={<AiOutlinePlus />} label={"Ajouter un nouveau produit"} onClick={() => selectTab("add")} className={isAddSelected ? "is-active" : ""} />
      <Tab Icon={<BsFillPencilFill />} label={"Modifier un produit"} onClick={() => selectTab("edit")} className={isEditSelected ? "is-active" : ""} />
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