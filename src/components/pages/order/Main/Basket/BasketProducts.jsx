import { styled } from 'styled-components';
import BasketCard from './BasketCard';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { DEFAULT_IMAGE } from '../../../../../enums/product';

export default function BasketProducts({ basket }) {
 //state

 //comportements
 const { handleDeleteCard } = useContext(OrderContext)

 //affichage
 return <BasketProductsStyled>
  {basket.map((basketProduct) => (
   <BasketCard key={basketProduct.id} {...basketProduct} imageSource={basketProduct.imageSource ? basketProduct.imageSource : DEFAULT_IMAGE} handleDeleteCard={handleDeleteCard} />
  ))}
 </BasketProductsStyled >
}

const BasketProductsStyled = styled.div`
flex: 1;
display: flex;
flex-direction: column;
overflow-y: scroll;
height: 85vh;



`