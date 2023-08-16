import React from 'react';
import SuccessMessage from './SuccessMessage';
import Button from '../../../../../reusable-ui/Button';

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label="Ajouter un nouveau produit"
        version="success" />
      {isSubmitted && (
        <SuccessMessage />)}
    </>
  )
}


