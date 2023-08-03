import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function AddForm() {
 return (
  <AddFormStyled>
   <div className="image-preview">Image</div>
   <div className="inputs">
    <input type="text" placeholder="Nom" />
    <input type="text" placeholder="Image URL" />
    <input type="text" placeholder="Prix" />
   </div>
   <div className="submit">Submit</div>
  </AddFormStyled>
 )
}
const AddFormStyled = styled.form`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${theme.gridUnit}px;
  height: 100%;

  & > div {
  border: 1px solid #000; 
  }
  .image-preview{
   grid-area: 1 / 1/ 4 / 2;
  }
  .inputs{
   grid-area: 1 / 2 / 4 / 3;
   display: grid;
  }
  .submit{   
   grid-area: 4 / 2 / 4 / 3;

  }
`;
