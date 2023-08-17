import { styled } from 'styled-components';
import BasketCard from './BasketCard';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function BasketProducts({ basket }) {
 //state

 //comportements
 const { handleDeleteCard } = useContext(OrderContext)

 //affichage
 return <BasketProductsStyled>
  {basket.map((basketProduct) => (
   <BasketCard key={basketProduct.id} {...basketProduct} handleDeleteCard={handleDeleteCard} />
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