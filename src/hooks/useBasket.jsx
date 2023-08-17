import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"


export const useBasket = () => {
 const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD)

 const handleDeleteCard = (idOfProductToDelete) => {
  const basketCopy = deepClone(basket)

  const basketUpdated = basketCopy.filter((product) => product.id !== idOfProductToDelete)

  setBasket(basketUpdated);
 }

 const handleAddToBasket = (event, title, price, imageSource, quantity) => {
  event.stopPropagation();
  const productToAdd = {
   title,
   imageSource,
   price,
   quantity,
  }
  const basketCopy = deepClone(basket)

  const basketUpdated = [productToAdd, ...basketCopy]

  setBasket(basketUpdated)
 }

 return { basket, handleDeleteCard, handleAddToBasket }
}