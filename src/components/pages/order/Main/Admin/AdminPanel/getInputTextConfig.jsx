import { FaHamburger } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";


export const getInputTextsConfig = (newProduct) =>
 [
  {
   id: 0,
   name: "title",
   value: newProduct.title,
   placeholder: "Nom du produit (ex. Super Burger)",
   Icon: <FaHamburger />,
   type: "text",
  },
  {
   id: 1,
   name: "imageSource",
   value: newProduct.imageSource,
   placeholder: "Lien URL d'une image (ex. https://la-photo-de-mon-produit)",
   Icon: <BsCameraFill />,
   type: "url",
  },
  {
   id: 2,
   name: "price",
   value: newProduct.price ? newProduct.price : "",
   placeholder: "Prix",
   Icon: <MdOutlineEuro />,
   type: "number",
  }
 ]