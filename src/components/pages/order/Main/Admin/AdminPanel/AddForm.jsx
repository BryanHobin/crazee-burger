import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { useContext, useState } from 'react';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {

 const { handleAddProduct } = useContext(OrderContext)
 const [title, setTitle] = useState("")
 const [imageSource, setImageSource] = useState("")
 const [price, setPrice] = useState(0)


 const handleSubmit = (event, title, imageSource, price) => {
  event.preventDefault();
  const productToAdd = {
   id: new Date().getTime(),
   title,
   imageSource,
   price
  }
  handleAddProduct(productToAdd)
  setTitle("")
  setImageSource("")
  setPrice("")
 }

 return (
  <AddFormStyled onSubmit={(event) => handleSubmit(event, title, imageSource, price)}>
   <div className="image-preview">Aucune Image</div>
   <div className="inputs">
    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Nom" required />
    <input value={imageSource} onChange={(e) => setImageSource(e.target.value)} type="text" placeholder="Image URL" required />
    <input value={price ? price : ""} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Prix" required />
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
