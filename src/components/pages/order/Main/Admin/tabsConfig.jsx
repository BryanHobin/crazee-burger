import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";

export const getTabsConfig = () => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <BsFillPencilFill />,
    Content: <EditForm />
  }
]