import { findInArray } from "../../../../../../utils/array";

export const calculateTotalToPay = (basket, menu) => {
 return basket.reduce((total, basketProduct) => {
  const menuProduct = findInArray(basketProduct.id, menu);
  if (isNaN(menuProduct.price)) return total;
  return total + basketProduct.quantity * menuProduct.price;
 }, 0);
};
