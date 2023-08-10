import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function ImagePreview({ product }) {

 return (
  <ImagePreviewStyled>
   {product.imageSource ? <img src={product.imageSource} alt={product.title} /> : "Aucune image"}
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