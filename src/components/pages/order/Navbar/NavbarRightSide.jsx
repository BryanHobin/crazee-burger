import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { theme } from "../../../../theme";


export default function NavbarRightSide({ username }) {
  const [isAdminMode, setIsAdminMode] = useState(false)

  const toastInfo = () => {
    if (!isAdminMode) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsAdminMode(!isAdminMode)

  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton labelIfUnchecked="Activer le mode admin" onToggle={toastInfo} labelIfChecked="Désactiver le mode admin" />
      <Profile username={username} className={"profile"} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;