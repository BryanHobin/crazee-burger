import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export const getTabsConfig = (currentTab) => [
 /*  {
    index: "chevron-up-down",
    label: "",
    Icon: isCollapsed ? <BsChevronUp /> : <BsChevronDown />,
    className: isCollapsed ? "is-active" : "",
  }, */
 {
  index: "add",
  label: "Ajouter un produit",
  Icon: <AiOutlinePlus />,
  className: currentTab === "add" ? "is-active" : "",
 },
 {
  index: "edit",
  label: "Modifier un produit",
  Icon: <BsFillPencilFill />,
  className: currentTab === "edit" ? "is-active" : "",
 }
]