import { useState } from "react";

export const useSucessMessage = (timeDelay = 2000) => {
 const [isSubmitted, setIsSubmitted] = useState(false)


 const displaySucessMessage = () => {
  setIsSubmitted(true)
  setTimeout(() => {
   setIsSubmitted(false)
  }, timeDelay);
 }

 return { isSubmitted, displaySucessMessage }
}