import { styled } from 'styled-components';
import { useContext, useRef } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './getInputTextConfig';
import EditInfoMessage from './EditInfoMessage';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const productEdited = { ...productSelected, [event.target.name]: event.target.value }

    setProductSelected(productEdited)
    handleEdit(productEdited)
  }

  return (
    <EditFormStyled>
      <ImagePreview product={productSelected} />
      <div className="inputs">
        {inputTexts.map(input => (
          <TextInput
            key={input.id}
            name={input.name}
            value={input.value}
            onChange={handleChange}
            type={input.type}
            placeholder={input.placeholder}
            Icon={input.Icon}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <EditInfoMessage />
      </div>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${theme.gridUnit}px;
  height: 100%;

  
  .inputs{
   grid-area: 1 / 2 / 4 / 3;
   display: grid;
   grid-row-gap:${theme.gridUnit}px;

  }
  .submit{   
   grid-area: 4 / 2 / 4 / 3;
   display: grid;
   grid-template-columns: repeat(2,minmax(200px, 1fr));
   align-items: center;
   position: relative;
   top:3px;

   
  

  }
`;