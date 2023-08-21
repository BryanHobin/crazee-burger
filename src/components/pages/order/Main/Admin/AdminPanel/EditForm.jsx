import { styled } from 'styled-components';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getInputTextsConfig } from './getInputTextConfig';
import EditInfoMessage from './EditInfoMessage';
import Form from '../../../../../reusable-ui/Form';

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, username, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const productEdited = { ...productSelected, [event.target.name]: event.target.value }

    setProductSelected(productEdited)
    handleEdit(productEdited, username)
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
