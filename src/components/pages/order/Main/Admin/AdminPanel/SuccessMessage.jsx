import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import { FiCheck } from "react-icons/fi";


const SUCCESS_MESSAGE = "Ajouté avec succès"


export default function SuccessMessage() {
 return (
  <SuccessMessageStyled>
   <FiCheck className="success-icon" />
   <span>{SUCCESS_MESSAGE}</span>
  </SuccessMessageStyled>
 )
}

const SuccessMessageStyled = styled.div`
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
`;