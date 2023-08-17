import { styled } from 'styled-components';
import BasketCard from './BasketCard';

export default function BasketProducts({ basket }) {
 //state

 //comportements

 //affichage
 return <BasketProductsStyled>
  {basket.map((basketProduct) => (
   <BasketCard key={basketProduct.id} {...basketProduct} />
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