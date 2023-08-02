import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';
import PrimaryButton from './PrimaryButton';

export default function Card({ title, imageSource, leftDescription }) {
  return (
    <CardStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">

        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}
          </div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
   background-color: ${theme.colors.white};
   width: 240px;
   height: 330px;
   display: grid;
   grid-template-rows: 65% 1fr;
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom:10px;
   box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
   border-radius: ${theme.borderRadius.extraRound};

   .image{
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
    color:${theme.colors.dark};
    margin-bottom: ${theme.gridUnit}px;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
   }
   .info-text{
    margin-top: ${theme.spacing.sm};
   }
   .description{
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left-description{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P0};


    }
    .right-description{
     display: flex;
     align-items: center;
     justify-content: center;
     .primary-button{
      padding: ${theme.spacing.sm};
      font-size: ${theme.fonts.size.XS};
     }
   }
   }
`;