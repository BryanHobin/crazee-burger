import { styled } from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getInputTextsConfig } from './getInputTextConfig';
import EditInfoMessage from './EditInfoMessage';
import Form from './Form';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const productEdited = { ...productSelected, [event.target.name]: event.target.value }

    setProductSelected(productEdited)
    handleEdit(productEdited)
  }

  return (
    <Form
      inputs={inputTexts}
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <EditInfoMessage />
    </Form>
  )
}
