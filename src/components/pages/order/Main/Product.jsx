import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';

export default function Product({ title, imageSource, price }) {
 return (
  <ProductStyled>
   <div className="image">
    <img src={imageSource} alt={title} />
   </div>
   <div className="info-text">

    <div className="title">{title}</div>
    <div className="description">
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
   display: grid;
   grid-template-rows: 65% 1fr;
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom:10px;

   .image{
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    margin-top: 50px;

    img{
      width:100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
   }

   .title{
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
   }

   .description{
    border:1px solid blue;
    display: grid;
    grid-template-columns: 1fr 1fr;
   }
`;