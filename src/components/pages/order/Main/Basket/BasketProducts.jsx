import { styled } from 'styled-components';
import BasketCard from './BasketCard';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { DEFAULT_IMAGE } from '../../../../../enums/product';
import { findInArray } from '../../../../../utils/array';

export default function BasketProducts() {
 //state

 //comportements
 const { basket, menu, isAdminMode, handleDeleteBasketCard } = useContext(OrderContext)
 const handleOnDeleteButton = (event, id) => {
  event.stopPropagation()
  handleDeleteBasketCard(id)
 }

 //affichage
 return <BasketProductsStyled>
  {basket.map((basketProduct) => {
   const menuProduct = findInArray(basketProduct.id, menu)
   return (
    <BasketCard key={menuProduct.id} {...menuProduct} imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE} quantity={basketProduct.quantity} isClickable={isAdminMode} onDelete={(event) => handleOnDeleteButton(event, menuProduct.id)} />
   )
  })}
 </BasketProductsStyled >
}

const BasketProductsStyled = styled.div`
flex: 1;
display: flex;
flex-direction: column;
overflow-y: scroll;
height: 85vh;



`