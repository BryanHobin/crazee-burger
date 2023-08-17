import { useState } from "react"
import { deepClone, findIndex, removeFromArray } from "../utils/array"
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

  const menuUpdated = removeFromArray(idOfProductToDelete, menuCopy)

  setMenu(menuUpdated);


 }

 const handleEdit = (productEdited) => {
  const menuCopy = deepClone(menu)
  const indexOfProductEdited = findIndex(productEdited.id, menu)

  menuCopy[indexOfProductEdited] = productEdited;

  setMenu(menuCopy);
 }

 const resetMenu = () => {
  setMenu(DEFAULT_MENU);
 }

 return { menu, setMenu, handleAddProduct, handleDelete, handleEdit, resetMenu }
}