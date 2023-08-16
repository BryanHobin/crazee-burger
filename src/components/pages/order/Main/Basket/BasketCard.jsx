import { styled } from 'styled-components';
import { formatPrice } from '../../../../../utils/maths';
import { theme } from '../../../../../theme';

export default function BasketCard({ id, title, imageSource, price, quantity }) {
 //state

 //comportements

 //affichage
 return <BasketCardStyled>
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


&:first-child{
 margin-top: 20px;
}
&:last-child{
 margin-bottom: 20px;
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
 grid-area: 1 / 2 / 3 / 3;
 align-items: center;
 height: 100%;

 .title{
  grid-area: 1 / 2 / 2 / 3;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  font-weight: ${theme.fonts.weights.bold};
  
 }
 .price{
  grid-area: 2 / 2 / 3 / 3;
  color:${theme.colors.primary};

 }
}
.quantity{
 grid-area: 1 / 3 / 3 / 4;
 color:${theme.colors.primary};
 text-align: center;

}



`