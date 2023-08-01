import { styled } from "styled-components";
import { theme } from "../pages/theme";

export default function PrimaryButton({ label, Icon }) {
 return (
  <PrimaryButtonStyled>
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
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    border: 1px solid ${theme.colors.primary} ;
    transition: all 200ms ease-in-out;

    &:hover:not(:disabled){
      background-color: #fff;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
    }

    &:active{
      color: white;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary} ;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
`;