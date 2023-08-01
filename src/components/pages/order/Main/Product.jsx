import React from 'react'
import { styled } from 'styled-components';

export default function Product({ title, imageSource, price }) {
 return (
  <ProductStyled>
   <div className="image">
    <img src={imageSource} alt={title} />
   </div>
   <div className="info-text">
    <div className="description">
     <div className="title">{title}</div>

     <div className="price">{price}</div>
     <div className="add-button">Ajouter</div>
    </div>
   </div>
  </ProductStyled>
 )
}

const ProductStyled = styled.div`
   background-color: red;
   width: 240px;
   height: 330px;

   .image{
    border: 1px solid purple;
    width: 200px;
    height: auto;

    img{
      width:100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
   }
`;