import { css, styled } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, className, version = "normal", onClick }) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    background-color: ${theme.colors.primary};
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding:18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary} ;
    transition: all 200ms ease-in-out;

    &:hover:not(:disabled){
      background-color:${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
      cursor: pointer;
    }

    &:active{
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ${({ version }) => extraStyle[version]}
`


const extraStyleSucess = css`
  background: ${theme.colors.success};
  border-color: ${theme.colors.success};
  padding: ${theme.gridUnit}px 0;

  &:hover:not(:disabled){
    border-color: ${theme.colors.success};
    color: ${theme.colors.success};
  }
`

const extraStyle = {
  normal: "",
  success: extraStyleSucess
}