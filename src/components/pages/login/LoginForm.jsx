import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
 //state
 const [prenom, setPrenom] = useState("");

 //compo
 const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Bonjour ${prenom}`);
  setPrenom("")
 }
 return (<>
  <form action="submit" onSubmit={handleSubmit}>
   <h1>Bienvenue chez nous !</h1>
   <br />
   <h2>Connectez-vous</h2>
   <input type="text" value={prenom} onChange={(e) => { setPrenom(e.target.value) }} placeholder="Entrez votre prénom..." required />
   <button >Accéder à votre espace</button>
   <Link to="/order">Vers OrderPage</Link>
  </form></>
 )
}
