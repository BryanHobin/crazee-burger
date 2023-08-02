import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { BsFillPencilFill, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <AdminTabsStyled>
      <Tab Icon={isCollapsed ? <BsChevronUp /> : <BsChevronDown />} onClick={handleClick} className={isCollapsed ? "is-active" : ""} />
      <Tab Icon={<AiOutlinePlus />} label={"Ajouter un nouveau produit"} />
      <Tab Icon={<BsFillPencilFill />} label={"Modifier un produit"} />
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