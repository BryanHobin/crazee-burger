import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import { useContext } from 'react';

export default function ImagePreview() {
 const { newProduct } = useContext(OrderContext)

 return (
  <ImagePreviewStyled>
   {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : "Aucune image"}
  </ImagePreviewStyled>
 )
}

const ImagePreviewStyled = styled.div`
 grid-area: 1 / 1 / 4 / 2;
 display: flex;
 justify-content: center;
 align-items: center;
 border:1px solid ${theme.colors.greyLight};
 color: ${theme.colors.greySemiDark};
 border-radius: ${theme.borderRadius.extraRound};

 img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
 }
`;