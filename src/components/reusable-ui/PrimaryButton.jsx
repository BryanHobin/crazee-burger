import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
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
    font-size: ${theme.fonts.size.P0};
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
`;