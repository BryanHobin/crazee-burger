import { styled } from 'styled-components';
import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getInputTextsConfig } from './getInputTextConfig';
import EditInfoMessage from './EditInfoMessage';
import Form from '../../../../../reusable-ui/Form';
import SavingMessage from './SavingMessage';
import { useSucessMessage } from '../../../../../../hooks/useSuccessMessage';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, username, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected);

  const [valueOnFocus, setValueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySucessMessage } = useSucessMessage()

  const handleChange = (event) => {
    const productEdited = { ...productSelected, [event.target.name]: event.target.value }

    setProductSelected(productEdited)
    handleEdit(productEdited, username)
  }

  const handleOnFocus = (event) => {
    setValueOnFocus(event.target.value)
  }
  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    if (valueOnFocus !== valueOnBlur) {
      displaySucessMessage()
    }
  }

  return (
    <Form
      inputs={inputTexts}
      product={productSelected}
      onChange={handleChange}
      onFocus={(event) => handleOnFocus(event)}
      onBlur={(event) => handleOnBlur(event)}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  )
}
