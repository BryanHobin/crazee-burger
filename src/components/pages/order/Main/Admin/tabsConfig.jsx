import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export const getTabsConfig = () => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <BsFillPencilFill />,
  }
]