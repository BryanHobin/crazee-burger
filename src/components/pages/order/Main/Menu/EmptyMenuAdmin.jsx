import { styled } from 'styled-components';
import Button from '../../../../reusable-ui/Button';
import { theme } from '../../../../../theme';

export default function EmptyMenuAdmin({ onReset }) {

 return (
  <EmptyMenuAdminStyled>
   <h1>Le menu est vide ? </h1>
   <h2>
    Cliquez ci-dessous pour le réinitialiser
   </h2>
   <Button label="Générer de nouveaux produits" onClick={onReset} className="generate-button" />

  </EmptyMenuAdminStyled>
 )
}

const EmptyMenuAdminStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;

h1, h2{
 font-family: "Amatic SC",cursive;
 color:${theme.colors.greyBlue};
 margin: ${theme.gridUnit * 3}px;
}
h1{
 margin-bottom: 0;
 font-size: ${theme.fonts.size.P4};
 font-weight: ${theme.fonts.weights.semiBold};

}
h2{
 font-size: ${theme.fonts.size.P4};

}

.generate-button{
 width: auto;
}
`;