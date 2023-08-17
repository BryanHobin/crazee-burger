import { styled } from 'styled-components';
import { formatPrice } from '../../../../../utils/maths';
import { theme } from '../../../../../theme';
import { MdDeleteForever } from "react-icons/md"
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function BasketCard({ id, title, imageSource, price, quantity }) {
 //state
 const { isAdminMode } = useContext(OrderContext)

 //comportements

 //affichage
 return <BasketCardStyled>
  <div className={isAdminMode ? "delete-button active" : "delete-button"}>
   <MdDeleteForever className="icon" />
  </div>
  <img className="image" src={imageSource} alt={title} />
  <div className="info">
   <div className="title">{title}</div>
   <div className="price">{formatPrice(price)}</div>
  </div>
  <div className="quantity">x {quantity}</div>
 </BasketCardStyled>
}

const BasketCardStyled = styled.div`
margin: 10px 16px;
height: 86px;
display: grid;
grid-template-columns: 3fr 5fr 2fr ;
grid-template-rows: 1fr 1fr;
align-items: center;
background-color: ${theme.colors.white};
border-radius: ${theme.borderRadius.round};
padding: ${theme.gridUnit}px ${theme.gridUnit * 3}px;
box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
position: relative;

&:first-child{
 margin-top: 20px;
}
&:last-child{
 margin-bottom: 20px;
}


.delete-button{
 display: none;
 z-index: 1;
 transition: all .3s ease-in-out;
 cursor: pointer;

 &.active{
 position: absolute;
 right: 0;
 width: 25%;
 background-color: ${theme.colors.redSecondary};
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 color: ${theme.colors.white};
 border-top-right-radius: ${theme.borderRadius.round};
 border-bottom-right-radius: ${theme.borderRadius.round};
 
 &:hover{
  background-color: ${theme.colors.red};
 }
 }
}

.image{
 grid-area: 1 / 1 / 3 / 1;
 object-fit: contain;
 object-position: center;
 width: 100%;
 height: 100%;
}
.info{
 display: grid;
 grid-template-rows:1fr 1fr;
 align-items: center;
 height: 100%;
 width: 100%;
 margin-left: 10px;

 .title{
  grid-area: 1 / 1 / 2 / 3;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  font-weight: ${theme.fonts.weights.bold};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  
 }
 .price{
  grid-area: 2 / 1 / 3 / 3;
  color:${theme.colors.primary};

}
}
.quantity{
 grid-area: 1 / 3 / 3 / 4;
 color:${theme.colors.primary};
 text-align: center;

}



`