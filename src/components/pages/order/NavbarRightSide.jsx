import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Profile from "./Profile";


export default function NavbarRightSide({ username }) {
 return (
  <NavbarRightSideStyled>
   <Profile username={username} />
  </NavbarRightSideStyled>
 )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 50px;
`;