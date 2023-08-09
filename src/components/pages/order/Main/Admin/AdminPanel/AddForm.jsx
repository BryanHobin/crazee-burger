import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0
}
const SUCCESS_MESSAGE = "Ajouté avec succès"

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

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">{newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : "Aucune image"}</div>
      <div className="inputs">
        <TextInput
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
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label="Ajouter un nouveau produit"
          version="success" />
        {isSubmitted && (
          <div className="success-message">
            <FiCheck className='success-icon' />
            <span>{SUCCESS_MESSAGE}</span>
          </div>)}
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

  .image-preview{
   grid-area: 1 / 1/ 4 / 2;
   display: flex;
   justify-content: center;
   align-items: center;
   border:1px solid ${theme.colors.greyLight};
   color: ${theme.colors.greySemiDark};
   border-radius: ${theme.borderRadius.extraRound};

   img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
   }
  }
  .inputs{
   grid-area: 1 / 2 / 4 / 3;
   display: grid;
   grid-row-gap:${theme.gridUnit}px;

  }
  .submit{   
   grid-area: 4 / 2 / 4 / 3;
   display: grid;
   grid-template-columns: repeat(2,minmax(200px, 1fr));

   
   .success-message{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.success};
    padding-left: ${theme.gridUnit * 2}px;

    .success-icon{
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.circle};
    margin-right:${theme.gridUnit}px;
   }

   }
  }
`;
