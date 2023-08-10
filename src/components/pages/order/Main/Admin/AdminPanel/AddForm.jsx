import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SuccessMessage from './SuccessMessage';
import { getInputTextsConfig } from './getInputTextConfig';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';


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
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview />
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
        {/*  <TextInput
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom du produit (ex. Super Burger)"
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="Lien URL d'une image (ex. https://la-photo-de-mon-produit)"
          Icon={<BsCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          type="text"
          placeholder="Prix"
          Icon={<MdOutlineEuro />}
          version="minimalist"
        /> */}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label="Ajouter un nouveau produit"
          version="success" />
        {isSubmitted && (
          <SuccessMessage />)}
      </div>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
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
