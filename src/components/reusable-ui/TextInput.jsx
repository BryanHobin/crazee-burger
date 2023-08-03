import { styled } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //state

  //render
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </InputStyled>
  )
}
const InputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
     

    .icon{
      color:yellow;
      font-size: ${theme.fonts.size.SM};
      margin-right: ${theme.gridUnit}px;
      color:  ${theme.colors.greySemiDark};

    }

    input{
      border: none;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.greyDark};
      width: 100%;

      &::placeholder{   
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyExtraLight};
      }
    }

    
`;