import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { styled } from "styled-components";


export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton labelIfUnchecked="Activer le mode admin" labelIfChecked="Désactiver le mode admin" />
      <Profile username={username} className={"profile"} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 50px;

  .profile{
    margin-left: 50px;
  }
`;