import { useState } from "react"
import { deepClone, findInArray, findIndex, removeFromArray } from "../utils/array"
import { setLocalStorage } from "../utils/window"


export const useBasket = () => {
 const [basket, setBasket] = useState([])

 const handleDeleteBasketCard = (idOfProductToDelete, username, forced = false,) => {
  const basketCopy = deepClone(basket)

  const isProductAtOne = findInArray(idOfProductToDelete, basketCopy).quantity === 1
  if (isProductAtOne || forced) {
   removeFromBasket(idOfProductToDelete, basketCopy, setBasket, username)
   return
  }
  const indexOfProductToIncrement = findIndex(idOfProductToDelete, basketCopy)
  decrementProductAlreadyInBasket(basketCopy, indexOfProductToIncrement, setBasket, username)
 }

 const handleAddToBasket = (idProductToAdd, username) => {
  const basketCopy = deepClone(basket)

  const isProductAlreadyInBasket = findInArray(idProductToAdd, basketCopy) !== undefined

  if (!isProductAlreadyInBasket) {
   addProductToBasket(idProductToAdd, basketCopy, setBasket, username)
   return
  }
  incrementProductAlreadyInBasket(idProductToAdd, basketCopy, setBasket, username)
 }

 return { basket, setBasket, handleDeleteBasketCard, handleAddToBasket }
}



const addProductToBasket = (idProductToAdd, basketCopy, setBasket, username) => {
 const newBasketProduct = {
  id: idProductToAdd,
  quantity: 1,
 }
 const basketUpdated = [newBasketProduct, ...basketCopy]
 setBasket(basketUpdated)
 setLocalStorage(username, basketUpdated)

}

const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, setBasket, username) => {
 const indexOfProductToIncrement = findIndex(idProductToAdd, basketCopy)
 basketCopy[indexOfProductToIncrement].quantity += 1
 setBasket(basketCopy)
 setLocalStorage(username, basketCopy)
}

function decrementProductAlreadyInBasket(basketCopy, indexOfProductToIncrement, setBasket, username) {
 basketCopy[indexOfProductToIncrement].quantity -= 1
 setBasket(basketCopy)
 setLocalStorage(username, basketCopy)
}

function removeFromBasket(idOfProductToDelete, basketCopy, setBasket, username) {
 const basketUpdated = removeFromArray(idOfProductToDelete, basketCopy)
 setBasket(basketUpdated)
 setLocalStorage(username, basketUpdated)

}

