import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import React from 'react';


const Form = React.forwardRef(({
  inputs,
  product,
  onSubmit,
  onChange,
  QUELQUECHOSE
}
  , ref) => {

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview product={product} />
      <div className="inputs">
        {inputs.map(input => (
          <TextInput
            key={input.id}
            name={input.name}
            value={input.value}
            onChange={onChange}
            type={input.type}
            placeholder={input.placeholder}
            Icon={input.Icon}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}

          />
        ))}
      </div>
      <div className="submit">
        {QUELQUECHOSE}
      </div>
    </FormStyled>
  )
})

export default Form;


const FormStyled = styled.form`
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
