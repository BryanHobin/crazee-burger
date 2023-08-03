import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { BsFillPencilFill, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, isAddSelected, setIsAddSelected, isEditSelected, setIsEditSelected } = useContext(OrderContext)
  const selectEdit = () => {
    setIsAddSelected(false)

    setIsCollapsed(false)
    setIsEditSelected(true)
  }

  const selectAdd = () => {
    setIsEditSelected(false)

    setIsCollapsed(false)
    setIsAddSelected(true)
  }

  return (
    <AdminTabsStyled>
      <Tab Icon={isCollapsed ? <BsChevronUp /> : <BsChevronDown />} onClick={() => { setIsCollapsed(!isCollapsed) }} className={isCollapsed ? "is-active" : ""} />
      <Tab Icon={<AiOutlinePlus />} label={"Ajouter un nouveau produit"} onClick={selectAdd} className={isAddSelected ? "is-active" : ""} />
      <Tab Icon={<BsFillPencilFill />} label={"Modifier un produit"} onClick={selectEdit} className={isEditSelected ? "is-active" : ""} />
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