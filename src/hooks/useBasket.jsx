import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findInArray, findIndex, removeFromArray } from "../utils/array"


export const useBasket = () => {
 const [basket, setBasket] = useState(fakeBasket.EMPTY)

 const handleDeleteBasketCard = (idOfProductToDelete, forced = false) => {
  const basketCopy = deepClone(basket)

  const isProductAtOne = findInArray(idOfProductToDelete, basketCopy).quantity === 1
  if (isProductAtOne || forced) {
   removeFromBasket(idOfProductToDelete, basketCopy, setBasket)
   return
  }
  const indexOfProductToIncrement = findIndex(idOfProductToDelete, basketCopy)
  decrementProductAlreadyInBasket(basketCopy, indexOfProductToIncrement, setBasket)
 }

 const handleAddToBasket = (idProductToAdd) => {
  const basketCopy = deepClone(basket)

  const isProductAlreadyInBasket = findInArray(idProductToAdd, basketCopy) !== undefined

  if (!isProductAlreadyInBasket) {
   addProductToBasket(idProductToAdd, basketCopy, setBasket)
   return
  }
  incrementProductAlreadyInBasket(idProductToAdd, basketCopy, setBasket)
 }
 return { basket, handleDeleteBasketCard, handleAddToBasket }
}



const addProductToBasket = (idProductToAdd, basketCopy, setBasket) => {
 const newBasketProduct = {
  id: idProductToAdd,
  quantity: 1,
 }
 const basketUpdated = [newBasketProduct, ...basketCopy]
 setBasket(basketUpdated)
}

const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, setBasket) => {
 const indexOfProductToIncrement = findIndex(idProductToAdd, basketCopy)
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

