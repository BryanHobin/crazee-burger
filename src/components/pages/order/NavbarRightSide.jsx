import { styled } from "styled-components";
import { Link } from "react-router-dom";


export default function NavbarRightSide({ username }) {
 return (
  <NavbarRightSideStyled>
   <h1>Bonjour {username}</h1>
   <Link to="/">
    <button>Déconnexion</button>
   </Link>
  </NavbarRightSideStyled>
 )
}

const NavbarRightSideStyled = styled.div`
  background-color: purple;
`;