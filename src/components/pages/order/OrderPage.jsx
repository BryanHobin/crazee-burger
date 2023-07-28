import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
 //state
 const { prenom } = useParams()

 //compo

 //render


 return (
  <div>
   <h1>Bonjour {prenom}</h1>
   <Link to="/">
    <button>Déconnexion</button>
   </Link>
  </div>
 )
}
