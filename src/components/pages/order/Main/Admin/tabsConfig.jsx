import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
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
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  }
]