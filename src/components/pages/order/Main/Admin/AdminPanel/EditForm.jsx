import { styled } from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './getInputTextConfig';

export default function EditForm() {

  const { productSelected, setProductSelected, handleEdit } = useContext(OrderContext)

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const productEdited = { ...productSelected, [event.target.name]: event.target.value }

    setProductSelected(productEdited)
    handleEdit(productEdited)
  }

  return (
    <EditFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
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
          />
        ))}
      </div>
      <div className="submit">
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

   

  }
`;