import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import {goToHome, goToLogin, goToProfile} from "../routes/coordinator"

function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate,'kieffer')} >
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLogin(navigate)} >
        Ir para página de Login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
