import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findInArray, findIndex } from "../utils/array"


export const useBasket = () => {
 const [basket, setBasket] = useState(fakeBasket.EMPTY)

 const handleDeleteCard = (idOfProductToDelete) => {
  const basketCopy = deepClone(basket)

  const basketUpdated = basketCopy.filter((product) => product.id !== idOfProductToDelete)

  setBasket(basketUpdated);
 }

 const handleAddToBasket = (productToAdd) => {
  const basketCopy = deepClone(basket)

  const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined

  if (!isProductAlreadyInBasket) {
   AddProductToBasket(productToAdd, basketCopy, setBasket)
   return
  }
  incrementProductAlreadyInBasket(productToAdd, basketCopy, setBasket)
 }
 return { basket, handleDeleteCard, handleAddToBasket }
}



const AddProductToBasket = (productToAdd, basketCopy, setBasket) => {
 const newBasketProduct = {
  ...productToAdd,
  quantity: 1,
 }
 const basketUpdated = [newBasketProduct, ...basketCopy]
 setBasket(basketUpdated)
}

const incrementProductAlreadyInBasket = (productToAdd, basketCopy, setBasket) => {
 const indexOfProductToIncrement = findIndex(productToAdd.id, basketCopy)
 basketCopy[indexOfProductToIncrement].quantity += 1
 setBasket(basketCopy)
}

