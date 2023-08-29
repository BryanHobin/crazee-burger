import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyMenuClient() {


  return (
    <EmptyMenuClientStyled>
      <h1>Victime de notre succès ! :D</h1>
      <h2>
        De nouvelles recettes sont en cours de préparation.
      </h2>
      <h2>
        À très vite !
      </h2>
    </EmptyMenuClientStyled>
  )
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
text-align: center;
h1, h2{
 font-family: "Amatic SC",cursive;
 color:${theme.colors.greyBlue};
}
h1{
 margin-bottom: ${theme.gridUnit * 3}px;
 font-size: ${theme.fonts.size.P4};
 font-weight: ${theme.fonts.weights.semiBold};

}
h2{
 font-size: ${theme.fonts.size.P4};
 margin-top: 0;
}
`;