import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0
}

export default function AddForm() {

  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)


  const handleSubmit = (event, title, imageSource, price) => {
    event.preventDefault();
    const productToAdd = {
      id: new Date().getTime(),
      title: newProduct.title,
      imageSource: newProduct.imageSource,
      price: newProduct.price
    }
    handleAddProduct(productToAdd)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleChange = (event) => {
    const newValue = event.target.value
    const name = event.target.name
    setNewProduct({ ...newProduct, [name]: newValue })
  }

  return (
    <AddFormStyled onSubmit={(event) => handleSubmit(event, title, imageSource, price)}>
      <div className="image-preview">Aucune Image</div>
      <div className="inputs">
        <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder="Nom" required />
        <input name="imageSource" value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Image URL" required />
        <input name="price" value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder="Prix" required />
      </div>
      <div className="submit">
        <button>Submit</button>
        <div className="info-box">infoBox</div>
      </div>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${theme.gridUnit}px;
  height: 100%;
/* 
  & > div {
  border: 1px solid #000; 
  } */
  .image-preview{
   grid-area: 1 / 1/ 4 / 2;
   display: flex;
   justify-content: center;
   align-items: center;
   border:1px solid ${theme.colors.greyLight};
   color: ${theme.colors.greySemiDark};
   border-radius: ${theme.borderRadius.extraRound};
  }
  .inputs{
   grid-area: 1 / 2 / 4 / 3;
   display: grid;
  }
  .submit{   
   grid-area: 4 / 2 / 4 / 3;
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));

   .info-box{
    display: flex;
    justify-content: center;
    align-items: center;
   }
  }
`;
