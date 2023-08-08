import { styled } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //state

  //render
  return (
    <InputStyled>
      <div className="icon">{Icon && Icon}</div>
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
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${theme.fonts.size.SM};
      margin-right: ${theme.gridUnit}px;
      margin-left: ${theme.gridUnit}px;
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