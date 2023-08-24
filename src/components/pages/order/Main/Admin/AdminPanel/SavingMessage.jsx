import { BsCloudCheck } from 'react-icons/bs';
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function SavingMessage() {
 //state

 //comportements

 //affichage
 return <SavingMessageStyled>
  <div className="icon">
   <BsCloudCheck />
  </div>
  <span className="sentence">Modifications enregistrées !</span>
 </SavingMessageStyled>
}

const SavingMessageStyled = styled.div`

 display: flex;
 align-items: center;
 color: ${theme.colors.blue};

 .icon{
  font-size: ${theme.fonts.size.P2};
  display: flex;
  margin: 0 10px;
 }
 .sentence{
 font-size: ${theme.fonts.size.SM};

 }

`