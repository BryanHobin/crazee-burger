import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { BsFillPencilFill, BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs() {
 return (
  <AdminTabsStyled>
   <Tab Icon={<BsChevronDown />} />
   <Tab Icon={<AiOutlinePlus />} label={"Ajouter un nouveau produit"} />
   <Tab Icon={<BsFillPencilFill />} label={"Modifier un produit"} />
  </AdminTabsStyled>
 )
}
const AdminTabsStyled = styled.div`
  margin-left: 70px;
`;