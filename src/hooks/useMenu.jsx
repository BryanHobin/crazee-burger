import { useState } from "react"
import { deepClone, findIndex, removeFromArray } from "../utils/array"
import { fakeMenu } from "../fakeData/fakeMenu"
import { syncBothMenus } from "../../api/product"


export const useMenu = () => {

 const [menu, setMenu] = useState(undefined)



 const handleAddProduct = (nouveauProduit, username) => {
  const menuCopy = deepClone(menu)

  const menuUpdated = [nouveauProduit, ...menuCopy]

  setMenu(menuUpdated)
  syncBothMenus(username, menuUpdated)
 }

 const handleDelete = (idOfProductToDelete, username) => {
  const menuCopy = deepClone(menu)

  const menuUpdated = removeFromArray(idOfProductToDelete, menuCopy)

  setMenu(menuUpdated);
  syncBothMenus(username, menuUpdated)

 }

 const handleEdit = (productEdited, username) => {
  const menuCopy = deepClone(menu)
  const indexOfProductEdited = findIndex(productEdited.id, menu)

  menuCopy[indexOfProductEdited] = productEdited;

  setMenu(menuCopy);
  syncBothMenus(username, menuCopy)

 }

 const resetMenu = (username) => {
  setMenu(fakeMenu.LARGE);
  syncBothMenus(username, fakeMenu.LARGE)

 }

 const checkIfProductSelected = (idProductMenu, idProductClickedOn) => {
  return idProductMenu === idProductClickedOn ? true : false;
 }

 return { menu, setMenu, handleAddProduct, handleDelete, handleEdit, resetMenu, checkIfProductSelected }
}