import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findInArray } from "../utils/array"


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
   const newBasketProduct = {
    ...productToAdd,
    quantity: 1,
   }

   const basketUpdated = [newBasketProduct, ...basketCopy]

   setBasket(basketUpdated)
  }


 }

 return { basket, handleDeleteCard, handleAddToBasket }
}