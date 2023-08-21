import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getInputTextsConfig } from './getInputTextConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from '../../../../../reusable-ui/Form';
import SubmitButton from './SubmitButton';
import { useSucessMessage } from '../../../../../../hooks/useSuccessMessage';


export default function AddForm() {

  const { handleAddProduct, newProduct, setNewProduct, username } = useContext(OrderContext)
  const { isSubmitted, displaySucessMessage } = useSucessMessage()

  const handleSubmit = (event) => {
    event.preventDefault();
    const productToAdd = {
      id: crypto.randomUUID(),
      title: newProduct.title,
      imageSource: newProduct.imageSource,
      price: newProduct.price
    }
    handleAddProduct(productToAdd, username)
    setNewProduct(EMPTY_PRODUCT)
    displaySucessMessage()

  }



  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  }

  const inputTexts = getInputTextsConfig(newProduct);


  return (
    <Form
      inputs={inputTexts}
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}
