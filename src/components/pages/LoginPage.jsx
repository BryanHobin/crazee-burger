import { useState } from "react";

export default function LoginPage() {
 //state
 const [prenom, setPrenom] = useState("");

 //compo
 const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Bonjour ${prenom}`);
  setPrenom("")
 }


 //render
 return (<>
  <h1>Bienvenue chez nous !</h1>
  <br />
  <h2>Connectez-vous</h2>
  <form action="submit" onSubmit={handleSubmit}>
   <input type="text" value={prenom} onChange={(e) => { setPrenom(e.target.value) }} placeholder="Entrez votre prénom..." required /><button >Accéder à votre espace</button>
  </form>
 </>)
}
