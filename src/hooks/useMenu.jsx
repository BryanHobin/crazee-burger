import { useState } from "react"
import { deepClone } from "../utils/array"
import { fakeMenu } from "../fakeData/fakeMenu"

const DEFAULT_MENU = fakeMenu.LARGE

export const useMenu = () => {

 const [menu, setMenu] = useState(DEFAULT_MENU)



 const handleAddProduct = (nouveauProduit) => {
  const menuCopy = deepClone(menu)

  const menuUpdated = [nouveauProduit, ...menuCopy]

  setMenu(menuUpdated)
 }

 const handleDelete = (idOfProductToDelete) => {
  const menuCopy = deepClone(menu)

  const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

  setMenu(menuUpdated);


 }

 const handleEdit = (productEdited) => {
  const menuCopy = deepClone(menu)
  const indexOfProductEdited = menu.findIndex((product) => product.id === productEdited.id)

  menuCopy[indexOfProductEdited] = productEdited;

  setMenu(menuCopy);
 }

 const resetMenu = () => {
  setMenu(DEFAULT_MENU);
 }

 return { menu, setMenu, handleAddProduct, handleDelete, handleEdit, resetMenu }
}