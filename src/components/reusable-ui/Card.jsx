import { css, styled } from 'styled-components';
import { theme } from '../../theme';
import Button from './Button';
import { TiDelete } from "react-icons/ti"

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
}) {
  return (
    <CardStyled className="produit" onClick={onClick} isHoverable={isHoverable} isSelected={isSelected}>
      {hasDeleteButton && (
        <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
          <TiDelete className="icon" />
        </button>)
      }
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button className="primary-button" label={"Ajouter"} onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      </div>
    </CardStyled >
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
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;
    transition: all ease-in-out .3s;

    .delete-button{
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      color:${theme.colors.primary};
      z-index: 2;
      border: none;
      background: none;
      
      .icon{
        height: 100%;
        width: 100%;
      }
      &:hover{
        color: ${theme.colors.red};
      }
      &:active{
        color:${theme.colors.primary};
      }
    }

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
      font-size: ${theme.fonts.size.SM};
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
${({ isHoverable }) => isHoverable && hoveredStyle}

${({ isHoverable, isSelected }) => isHoverable && isSelected ? selectedStyle : {}}
`


const hoveredStyle = css`
  &:hover{
    background-color: ${theme.colors.primary};
    transform: scale(1.1);
    box-shadow: ${theme.shadows.orangeHighlight};

    .title{
    color: ${theme.colors.white};
    }
    .description{
      .left-description{
      color: ${theme.colors.white};

      }
    }
    .primary-button{
      background-color:${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
      cursor: pointer;
      &:hover{
        background-color:${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white} ;
      }
      &:active{
        background-color:${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary} ;
      }
    }

    .delete-button{
      color:${theme.colors.white};
      &:hover{
        color:${theme.colors.red};
      }
      &:active{
        color:${theme.colors.white}
      }
    }
  }
`

const selectedStyle = css`
  box-shadow: ${theme.shadows.orangeHighlight};

`
