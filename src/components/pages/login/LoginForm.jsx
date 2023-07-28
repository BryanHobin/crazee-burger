import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
 //state
 const [prenom, setPrenom] = useState("");
 const navigate = useNavigate()

 //compo
 const handleSubmit = (event) => {
  event.preventDefault();
  setPrenom("")
  navigate(`order/${prenom}`)
 }
 return (<>
  <form action="submit" onSubmit={handleSubmit}>
   <h1>Bienvenue chez nous !</h1>
   <br />
   <h2>Connectez-vous</h2>
   <input type="text" value={prenom} onChange={(e) => { setPrenom(e.target.value) }} placeholder="Entrez votre prénom..." required />
   <button >Accéder à votre espace</button>
  </form></>
 )
}
