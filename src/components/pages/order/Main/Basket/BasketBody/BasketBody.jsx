import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import BasketEmpty from './BasketEmpty';
import BasketProducts from './BasketProducts';

export default function BasketBody() {
 //state
 const { basket } = useContext(OrderContext)


 const isBasketEmpty = basket.length === 0

 //comportements

 //affichage
 return <>{isBasketEmpty ? <BasketEmpty /> : <BasketProducts />}</>
}
