import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"


export const useBasket = () => {
 const [basket, setBasket] = useState(fakeBasket.LARGE)

 const handleDeleteCard = (idOfProductToDelete) => {
  const basketCopy = deepClone(basket)

  const basketUpdated = basketCopy.filter((product) => product.id !== idOfProductToDelete)

  setBasket(basketUpdated);

 }

 return { basket, handleDeleteCard }
}