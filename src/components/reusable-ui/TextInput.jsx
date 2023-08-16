import { css, styled } from "styled-components";
import { theme } from "../../theme";
import React, { version } from "react";

const TextInput = React.forwardRef(
  ({ value, onChange, Icon, className, version = "normal", ...extraProps }, ref) => {
    //state

    //render
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          {...extraProps}
        />
      </TextInputStyled>
    )
  }
)

export default TextInput;
const TextInputStyled = styled.div`
    background-color: ${theme.colors.white};    
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
     
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
      color: ${theme.colors.greySemiDark};
      width: 100%;

      &:focus{
        outline: 0;
      }

      &::placeholder{   
        background-color: ${theme.colors.white};
        color: ${theme.colors.greySemiDark};
      }
    }

    ${({ version }) => extraStyle[version]}
`


const extraStyleMinimalist = css`
background-color: ${theme.colors.background_white};
padding: ${theme.gridUnit}px ${theme.gridUnit * 2}px ;
color: ${theme.colors.greyBlue};

input{
  background: ${theme.colors.background_white};
  color: ${theme.colors.dark};

  
  &::placeholder{   
      background-color: ${theme.colors.background_white};
  }
}
`

const extraStyle = {
  normal: "",
  minimalist: extraStyleMinimalist,
}