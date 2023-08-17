import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findInArray, findIndex, removeFromArray } from "../utils/array"


export const useBasket = () => {
 const [basket, setBasket] = useState(fakeBasket.EMPTY)

 const handleDeleteCard = (idOfProductToDelete) => {
  const basketCopy = deepClone(basket)

  const isProductAtOne = findInArray(idOfProductToDelete, basketCopy).quantity === 1
  if (isProductAtOne) {
   removeFromBasket(idOfProductToDelete, basketCopy, setBasket)
   return
  }
  const indexOfProductToIncrement = findIndex(idOfProductToDelete, basketCopy)
  decrementProductAlreadyInBasket(basketCopy, indexOfProductToIncrement, setBasket)
 }

 const handleAddToBasket = (productToAdd) => {
  const basketCopy = deepClone(basket)

  const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined

  if (!isProductAlreadyInBasket) {
   addProductToBasket(productToAdd, basketCopy, setBasket)
   return
  }
  incrementProductAlreadyInBasket(productToAdd, basketCopy, setBasket)
 }
 return { basket, handleDeleteCard, handleAddToBasket }
}



const addProductToBasket = (productToAdd, basketCopy, setBasket) => {
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

function decrementProductAlreadyInBasket(basketCopy, indexOfProductToIncrement, setBasket) {
 basketCopy[indexOfProductToIncrement].quantity -= 1
 setBasket(basketCopy)
}

function removeFromBasket(idOfProductToDelete, basketCopy, setBasket) {
 const basketUpdated = removeFromArray(idOfProductToDelete, basketCopy)
 setBasket(basketUpdated)
}

