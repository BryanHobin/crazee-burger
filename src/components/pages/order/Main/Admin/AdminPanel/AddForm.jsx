import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { getInputTextsConfig } from './getInputTextConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from './Form';
import SuccessMessage from './SuccessMessage';
import Button from '../../../../../reusable-ui/Button';


export default function AddForm() {

  const { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const productToAdd = {
      id: crypto.randomUUID(),
      title: newProduct.title,
      imageSource: newProduct.imageSource,
      price: newProduct.price
    }
    handleAddProduct(productToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySucessMessage()

  }

  const displaySucessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000);
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
      QUELQUECHOSE={
        <>
          <Button
            className="submit-button"
            label="Ajouter un nouveau produit"
            version="success" />
          {isSubmitted && (
            <SuccessMessage />)}
        </>
      }
    />
  )
}
