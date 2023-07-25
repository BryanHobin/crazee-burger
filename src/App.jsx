import { useState } from "react";
import LoginPage from "./components/pages/LoginPage";

function App() {
  //state
  const [prenom, setPrenom] = useState("");

  //compo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (prenom == "") {
    } else {
      alert(`Bonjour ${prenom}`);
      setPrenom("")
    }
  }


  //render
  return <>
    <LoginPage />
    <h1>Bienvenue chez nous !</h1>
    <h2>Connectez-vous</h2>
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" value={prenom} onChange={(e) => { setPrenom(e.target.value) }} placeholder="Entrez votre prénom..." /><button >Accéder à votre espace</button>
    </form>
  </>
}

export default App