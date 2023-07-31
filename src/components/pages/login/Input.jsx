import { styled } from "styled-components";
import { theme } from "../theme";

export default function Input({ value, onChange, Icon, ...extraProps }) {
 //state

 //render
 return (
  <InputStyled>
   {Icon && Icon}
   <input
    value={value}
    onChange={onChange}
    {...extraProps}
   />
  </InputStyled>
 )
}
const InputStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
     

    .icon{
      color:yellow;
      font-size: 15px;
      margin-right: 8px;
      color:  ${theme.colors.greyMedium};

    }

    input{
      border: none;
      font-size: 15px;
      color: ${theme.colors.greyDark};
      width: 100%;
    }

    &::placeholder{
      background-color: #fff;
      color: lightgray;
    }
`;