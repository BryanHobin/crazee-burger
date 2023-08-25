import { styled } from 'styled-components';
import BasketCard from './BasketCard';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { DEFAULT_IMAGE } from '../../../../../enums/product';
import { findInArray } from '../../../../../utils/array';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
 //state
 const { username } = useContext(OrderContext)

 //comportements
 const { basket, menu, isAdminMode, handleDeleteBasketCard, handleProductSelected, productSelected, checkIfProductSelected } = useContext(OrderContext)
 const handleOnDeleteButton = (event, id) => {
  event.stopPropagation()
  handleDeleteBasketCard(id, username)
 }



 //affichage
 return <TransitionGroup component={BasketProductsStyled}>
  {basket.map((basketProduct) => {
   const menuProduct = findInArray(basketProduct.id, menu)
   return (
    <CSSTransition appear={true} classNames={"basket-cards"} key={basketProduct.id} timeout={500} >
     <BasketCard
      key={menuProduct.id}
      {...menuProduct}
      imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE}
      quantity={basketProduct.quantity}
      isClickable={isAdminMode}
      onDelete={(event) => handleOnDeleteButton(event, menuProduct.id)}
      isSelected={checkIfProductSelected(menuProduct.id, productSelected.id)}
      onClick={isAdminMode ? () => handleProductSelected(menuProduct.id) : null}
     />
    </CSSTransition>
   )
  })}
 </TransitionGroup>
}

const BasketProductsStyled = styled.div`
flex: 1;
display: flex;
flex-direction: column;
overflow-y: scroll;
height: 85vh;

.basket-cards-enter,.basket-cards-appear{
 transform: translateX(120%);
 opacity: 0;
}
.basket-cards-enter-active,.basket-cards-appear-active{
 transform: translateX(0%);
 opacity: 1;
 transition: all ease-in-out .5s;
}

.basket-cards-exit{
 transform: translateX(0%);
 opacity: 1;
}
.basket-cards-exit-active{
 transform: translateX(-120%);
 opacity: 0;
 transition: all ease-in-out .5s;
}



`