import { styled } from 'styled-components';
import HintMessage from './HintMessage';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';

export default function EditForm() {

  const { productSelected } = useContext(OrderContext)
  return (
    <EditFormStyled>
      <HintMessage />
      {productSelected && productSelected.title}
    </EditFormStyled>
  )
}
const EditFormStyled = styled.div`
  height: 100%;
`;
